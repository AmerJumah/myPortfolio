import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {contCreate} from '../../../actions/contActions'


class Contact extends Component {
    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }

    renderInput=({input,label,meta})=>{
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }

    renderTextarea=({input,label})=>{
      
        return (
            <div className='field'>
                <label>{label}</label>
                <textarea
                  {...input}
                  autoComplete='off'
                />
            </div>
        )
    }

    onSubmit= formValues => {
        this.props.contCreate(formValues)
    }

    render() {
        
        return (
            <>
                <h2>Wanna work with me...</h2>
                <div className="ui divider"></div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                  <Field name='name' component={this.renderInput} label='Your Name'/> 
                  <Field name='email' component={this.renderInput} label='Email' /> 
                  <Field name='subject' component={this.renderInput} label='Subject' /> 
                  <Field name='query' component={this.renderTextarea} label='Your Query' /> 
                  <button className='ui button primary'>Send</button>
                </form>
            </>
        )
    }
}

const validate = formValues => {
    const errors = {};
  
    if (!formValues.name) {
      errors.name = 'Please enter a name';
    }
  
    if (!formValues.email) {
      errors.email = 'Please enter an email to get in touch with you';
    }
    if (!formValues.subject) {
      errors.subject = 'Please enter a subject';
    }
  
    return errors;
};
  

const formWrapped = reduxForm({
    form: 'contact',validate
}) (Contact)

export default connect(null , {contCreate}) (formWrapped)