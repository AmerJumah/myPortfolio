import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'


class SkillsForm extends Component {
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
    onSubmit= formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        
        return (
            
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
               <Field name='skill' component={this.renderInput} label='Skill'/> 
               <Field name='level' component={this.renderInput} label='Level' /> 
               <Field name='duration' component={this.renderInput} label='Duration' /> 
               <Field name='key' component={this.renderInput} label='Key Skill' /> 
               <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};
  
    if (!formValues.skill) {
      errors.skill = 'You must enter a skill';
    }
  
    if (!formValues.level) {
      errors.level = 'You must enter a level';
    }
  
    return errors;
  };
  

export default  reduxForm({
    form: 'skillsForm',validate
}) (SkillsForm)

