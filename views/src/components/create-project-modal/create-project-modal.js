import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

export default class CreateProjectModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectName: '',
            reviewer: '',
            contributor: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <Modal show={this.props.openModal} onHide={this.props.openCreateProjectModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.createUser}>
                        <Form.Group controlId="projectName">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control autoFocus type="text" value={this.state.projectName}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="reviewer">
                            <Form.Label>Reviewer</Form.Label>
                            <Form.Control autoFocus type="text" value={this.state.reviewer}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="contributor">
                            <Form.Label>Contributor</Form.Label>
                            <Form.Control autoFocus type="text" value={this.state.contributor}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.openCreateProjectModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.openCreateProjectModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}