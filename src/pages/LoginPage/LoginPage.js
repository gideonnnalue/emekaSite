import React, { Component } from 'react';

class LoginPage extends Component {

    onLogin = () => {
        this.props.history.push('/dashboard');
    }
    render () {
        return (
            <div className="container my-5">
            <h1 className="my-2">Login</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <form>
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={() => this.onLogin()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;