import React from "react";
import CustomNavbar from "../../components/nav-bar/navbar";
import { getData } from "../../utils/storage";
import { Button, Form } from "react-bootstrap";
import {
  getProjectDetails,
  saveProject,
  saveEnable,
  cancelLock
} from "../../utils/HTTP";
import { toast } from "react-toastify";

const Toaster = ({ message }) => <div>{message}</div>;

export default class Contribute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      version: "",
      description: "",
      title: "",
      contributors: [],
      reviewer: ""
    };
  }

  componentWillMount() {
    const illegal = this.props.location.state === undefined;
    if (illegal || !getData("token")) {
      this.props.history.push("/home");
    }
    this.setState({
      id: this.props.location.state.id,
      version: this.props.location.state.version
    });
  }

  componentWillUnmount() {
    this.state = {
      id: 0,
      version: 0,
      description: "",
      title: "",
      contributors: [],
      reviewer: ""
    };
  }

  async componentDidMount() {
    await this.getProjectDetails();
    await this.updateEnable();
  }

  updateEnable = async () => {
    const requestData = {
      pid: this.state.id,
      userid: localStorage.getItem("userid")
    };
    try {
      const response = await saveEnable(requestData);
      if (response.data.status === 200) {
        toast.success(
          <Toaster message={"We are updating lock status for other users."} />
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  cancelEnable = async () => {
    const requestData = {
      pid: this.state.id
    };
    try {
      console.log(requestData.pid);
      const response = await cancelLock(requestData);

      if (response.status === 201) {
        toast.success(
          <Toaster message={"We are cancelling lock status for other users."} />
        );
        this.props.history.push("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  saveProject = async () => {
    try {
      const data = {
        pid: this.state.id,
        description: this.state.description
      };

      const response = await saveProject(data);
      console.log(response);
      if (response.status === 201) {
        // await this.updateEnable();
        toast.success(<Toaster message={"New version has been added"} />);
        this.props.history.push("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  getProjectDetails = async () => {
    try {
      const data = {
        pid: this.state.id,
        versionNum: this.state.version
      };
      const response = await getProjectDetails(data);
      if (response.status === 200) {
        this.setState({
          description: response.data.description,
          title: response.data.pname,
          contributors: response.data.contributors,
          reviewer: response.data.reviewer
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <CustomNavbar
          history={this.props.history}
          addProjects={this.addProjects}
        />
        <div className={"container"}>
          <div className="container mt-5">
            <div className="pb-2 mt-4 mb-2 border-bottom">
              <h3>{this.state.title}</h3>
            </div>
            <span>Contributors :</span>
            {this.state.contributors.map((item, index) => (
              <span className="badge badge-info ml-3 mb-3" key={index}>
                {" "}
                {item}{" "}
              </span>
            ))}
            &nbsp; &nbsp;
            <br />
            <span>Reviewer :</span>
            &nbsp; &nbsp;
            <span className="badge badge-warning"> {this.state.reviewer} </span>
            <br />
            <div className={"container"}>
              <div className="container mt-5">
                <Form.Group controlId="description">
                  <Form.Control
                    as="textarea"
                    rows="10"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <div className={"text-right"}>
                  <Button variant="outline-info" onClick={this.cancelEnable}>
                    Cancel
                  </Button>
                  &nbsp;
                  <Button variant="outline-info" onClick={this.saveProject}>
                    Save Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
