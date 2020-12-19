import React, { Component } from 'react'
import {connect} from 'react-redux'

import { eduCreate } from '../../../actions/eduActions'
import EduForm from './EduForm'

export class CreateEdu extends Component {
    
    onSubmit = (formValues)=>{
        this.props.eduCreate(formValues)
    }

    render() {
        return (
            <div>
                <h3>Create Edu</h3>
                <EduForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect (null,{eduCreate}) (CreateEdu)
