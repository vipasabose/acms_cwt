import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import {getData} from "./utils/storage";
import Home from "./containers/home/Home";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ReviewerHome from "./containers/reviewer-home/ReviewerHome";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    componentWillMount() {
        if (getData('token')) {
            this.setState({
                isLoggedIn: true
            });
        }
    }

    render() {
        return (
            <>
                <Router>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/createUser" component={Register}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/reviewerHome' component={ReviewerHome}/>
                </Router>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </>
        );
    }
}

export default App;
