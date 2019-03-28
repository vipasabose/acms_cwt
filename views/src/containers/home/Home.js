import React from 'react';
import CustomNavbar from "../../components/nav-bar/navbar";
import {getData} from "../../utils/storage";
import ProjectCard from "../../components/project-card/projectcard";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        if (!getData('token')) {
            this.props.history.push("/login");
        }
    }

    addProjects = (project) => {
        console.log(project);
        this.setState({
            projects: [...this.state.projects, project]
        });
    };

    render() {
        return (
            <>
                <CustomNavbar history={this.props.history} addProjects={this.addProjects}/>
                {
                    this.state.projects.map((item, index) =>
                        <li key={index} style={{listStyleType: 'none'}}>
                            {
                                <ProjectCard title={item.pname}/>
                            }
                        </li>
                    )
                }
            </>
        );
    }
}