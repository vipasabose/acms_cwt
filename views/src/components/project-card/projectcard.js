import React from 'react';
import {Card, Button, Dropdown, DropdownButton} from 'react-bootstrap';

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container mt-5'>
                <Card>
                    <Card.Header>
                        <Card.Title> {this.props.title} </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <DropdownButton id="dropdown-basic-button" title="Select Version"
                                        variant="outline-secondary">
                            <Dropdown.Item>Latest</Dropdown.Item>
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
        );
    }
}