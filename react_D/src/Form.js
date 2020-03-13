



import React from 'react';
import './Form.css';


export default class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isPhoneValid: true,
    isemailValid: true
  }

  render() {
    return (

      <form className='Form inputDiv'>
        <h2>Input Form</h2>
        <p className="class1">First Name:</p>
        <input placeholdr='First name' value={this.state.firstName}
          onChange={e => this.setState({ firstName: e.target.value })}
        />

        <p className="class1">Last Name:</p>
        <input className="" placeholdr='Last name ' value={this.state.lastName}
          onChange={e => this.setState({ lastName: e.target.value })}
        />

        <p className="class1">Phone:</p>
        <input placeholdr='Phone' value={this.state.phone}
          onChange={e => this.setState({ phone: e.target.value })}
          onBlur={e => this.setState({ isPhoneValid: e.target.value === "" || e.target.value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/) })}
        />
        {!this.state.isPhoneValid && <p className='red'> <ins>Please number is invalid</ins></p>}

        <p className="class1">Email:</p>
        <input placeholdr='Email' value={this.state.Email}
          onChange={e => this.setState({ email: e.target.value })}
          onBlur={e => this.setState({ isemailValid: e.target.value === "" || e.target.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) })}
        />
        {!this.state.isemailValid && <p className='red' > <ins> Email is invalid </ins></p>}
      </form>
    );
  }

}