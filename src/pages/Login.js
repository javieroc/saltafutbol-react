import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            onChange={this.onChange}
            type="text"
            placeholder="Email"
            value={email}
          />

          <input
            name="password"
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            value={password}
          />

          <button type="submit" className="btn">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    );
  }
}

export default Login;