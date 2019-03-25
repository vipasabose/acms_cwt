import React from 'react';
import CustomNavbar from "../../components/nav-bar/navbar";
import {getData} from "../../utils/storage";
import {Card, Button, Dropdown, DropdownButton} from 'react-bootstrap';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!getData('token')) {
            this.props.history.push("/login");
        }
    }

    render() {
        return (
            <>
                <CustomNavbar history={this.props.history}/>
                <div className='container mt-5'>
                    <Card>
                        <Card.Header>
                            <Card.Title> Project Name </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button"
                                            variant="outline-secondary">
                                <Dropdown.Item>Project 1</Dropdown.Item>
                                <Dropdown.Item>Project 2</Dropdown.Item>
                                <Dropdown.Item>Project 3</Dropdown.Item>
                                <Dropdown.Item>Project 4</Dropdown.Item>
                                <Dropdown.Item>Project 5</Dropdown.Item>
                                <Dropdown.Item>Project 6</Dropdown.Item>
                                <Dropdown.Item>Project 7</Dropdown.Item>
                                <Dropdown.Item>Project 8</Dropdown.Item>
                                <Dropdown.Item>Project 9</Dropdown.Item>
                                <Dropdown.Item>Project 10</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                        <Card.Footer>
                            <div className='text-right'>
                                <Button variant="primary">Read</Button> &nbsp;
                                <Button variant="outline-primary">Contribute</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </>
        );
    }
}