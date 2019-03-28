import React from 'react';
import CustomNavbar from "../../components/nav-bar/navbar";
import {getData} from "../../utils/storage";
import {Button, Card} from "react-bootstrap";

export default class ReviewerHome extends React.Component {
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
                <CustomNavbar history={this.props.history} isReviewer={true}/>
                <div className='container mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title> Project 1 </Card.Title> <span className='badge badge-success'> Accepted</span>
                        </Card.Body>
                        <Card.Footer>
                            <div className='text-right'>
                                <Button variant="primary">Read</Button> &nbsp;
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='container mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title> Project 2 </Card.Title> <span className='badge badge-warning'> Pending</span>
                        </Card.Body>
                        <Card.Footer>
                            <div className='text-right'>
                                <Button variant="primary">Read</Button> &nbsp;
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='container mt-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title> Project 3 </Card.Title> <span className='badge badge-danger'> Rejected</span>
                        </Card.Body>
                        <Card.Footer>
                            <div className='text-right'>
                                <Button variant="primary">Read</Button> &nbsp;
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </>
        );
    }
}