// StudentSignIn.js
import React, { Component } from 'react';
import './Form.css';

class StudentSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      mobile: '',
      submittedData: null,
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignIn = () => {
    const { userName, password, mobile } = this.state;
    if (!userName || !password || !mobile) {
      this.setState({ error: 'All fields are required!', submittedData: null });
      return;
    }

    this.setState({
      submittedData: { userName, password, mobile },
      error: '',
    });
  };

  render() {
    const { userName, password, mobile, submittedData, error } = this.state;

    return (
      <div className="form-container">
        <h2>Student Sign In (Controlled)</h2>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={this.handleChange}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        /><br />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={mobile}
          onChange={this.handleChange}
        /><br />
        <button onClick={this.handleSignIn}>Sign In</button>

        {error && <p className="error">{error}</p>}

        {submittedData && (
          <div className="result">
            <h3>Submitted Data:</h3>
            <p>Username: {submittedData.userName}</p>
            <p>Password: {submittedData.password}</p>
            <p>Mobile: {submittedData.mobile}</p>
          </div>
        )}
      </div>
    );
  }
}

export default StudentSignIn;
