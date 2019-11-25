import React, { Component } from 'react';
import { FormErrors } from './formerrors';
import Layout from '../components/layout';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      board: '',
      count: '',
      sum: '',
      formErrors: {board: '', count: ''},
      formValid: false,
      boardValid: false,
      countValid: false,  
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
    let boardValid = this.state.boardValid;
    let countValid = this.state.countValid;
    let sum = 0;

    switch (fieldName) {
      
      case 'board': 
        boardValid = value.match(/^([\d]{1,})$/i);
        if (boardValid)
          fieldValidationErrors.board = value ;
        else
          fieldValidationErrors.board = ' is invalid';
        break;
      
      case 'count':
        countValid = value.match(/^([\d]{1,})$/i);
        if(countValid)
          fieldValidationErrors.count = value;
        else
          fieldValidationErrors.count = ' is invalid';
        break;
      
      default:
        break;
    }

    sum = parseInt(fieldValidationErrors.board) * parseInt(fieldValidationErrors.count);

    if (isNaN(sum))
      sum = '';
    this.setState({formErrors: fieldValidationErrors,
                    boardValid: boardValid,
                    countValid: countValid,
                    sum: sum
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.boardValid && this.state.countValid});
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
          
            <div className="panel panel-default">
             <p>sum  {this.state.sum} </p>
            </div>
          
            <div className={`form-group ${this.errorClass(this.state.formErrors.board)}`}>
              <label htmlFor="board">Board</label>
              <input type="board" required className="form-control" name="board"
                placeholder="board"
                value={this.state.board}
                onChange={this.handleUserInput}  />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.count)}`}>
              <label htmlFor="board">Count</label>
              <input type="count" required className="form-control" name="count"
                placeholder="count"
                value={this.state.count}
                onChange={this.handleUserInput}  />
            </div>          
            <button type="submit" className="btn btn-primary" disabled={this.state.formValid}>Sign up</button>
            </form>
        </Layout>
    )
  }
}

export default Form;