import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'




class ExpForm extends Component {
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
        this.props.onSubmit(formValues)
    }

    render() {
        
        return (
            
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
               <Field name='title' component={this.renderInput} label='Position Name'/> 
               <Field name='company' component={this.renderInput} label='Organization Name' /> 
               <Field name='duration' component={this.renderInput} label='Duration' /> 
               <Field name='startDate' component={this.renderInput} label='Start Date' /> 
               <Field name='endDate' component={this.renderInput} label='Until' /> 
               <Field name='desc' component={this.renderTextarea} label='Description' /> 
               <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};
  
    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }
  
    
    if (!formValues.company) {
      errors.company = 'You must enter an orgnization Name';
    }
    if (!formValues.duration) {
      errors.duration = 'You must enter a duration';
    }
    if (!formValues.startDate) {
      errors.startDate = 'You must enter staring date';
    }
    if (!formValues.endDate) {
      errors.endDate = 'You must enter ending date';
    }
  
    return errors;
  };
  

export default  reduxForm({
    form: 'expForm',validate
}) (ExpForm)

