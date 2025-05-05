// UserSignIn.js
import React, { Component, createRef } from 'react';
import './Form.css';

class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.passwordRef = createRef();
    this.mobileRef = createRef();
    this.state = {
      submittedData: null,
      error: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = this.userNameRef.current.value;
    const password = this.passwordRef.current.value;
    const mobile = this.mobileRef.current.value;

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
    const { submittedData, error } = this.state;

    return (
      <div className="form-container">
        <h2>User Sign In (Uncontrolled)</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" ref={this.userNameRef} /><br />
          <input type="password" placeholder="Password" ref={this.passwordRef} /><br />
          <input type="text" placeholder="Mobile" ref={this.mobileRef} /><br />
          <button type="submit">Submit</button>
        </form>

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

export default UserSignIn;
