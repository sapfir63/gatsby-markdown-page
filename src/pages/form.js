import React, { Component } from 'react';
import { FormErrors } from './formerrors';
//import { CostBoard } from './costboard';
import Layout from '../components/layout';
//import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      board: '',
      count: '',
      formErrors: {email: '', password: '', board: '', count: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      boardValid: false,
      countValid: false,
      formCost: {board: '', count: ''},
   }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let boardValid = this.state.boardValid;
    let countValid = this.state.countValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      
      case 'board': 
        if (value.match(/^([\d]{1,})$/i))
          fieldValidationErrors.board = value ;
        break;
      
      case 'count':
        countValid = value.match(/^([\d]{1,})$/i);
        if(value.match(/^([\d]{1,})$/i))
          fieldValidationErrors.count = value;
        break;
      
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    boardValid: boardValid,
                    countValid: countValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <Layout>
        <form className="demoForm">
          <h2>Sign up</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          {/* <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div> */}
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <label htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>

          <div className={`form-group ${this.errorClass(this.state.formCost.board)}`}>
            <label htmlFor="board">board</label>
            <input type="board" required className="form-control" name="board"
              placeholder="board"
              value={this.state.board}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formCost.count)}`}>
            <label htmlFor="board">count</label>
            <input type="count" required className="form-control" name="count"
              placeholder="count"
              value={this.state.count}
              onChange={this.handleUserInput}  />
          </div>          
          <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
          </form>
        </Layout>
    )
  }
}

export default Form;