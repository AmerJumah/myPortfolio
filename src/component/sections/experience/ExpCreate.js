import React, { Component } from 'react'
import {connect} from 'react-redux'

import { expCreate } from '../../../actions/expActions'
import ExpForm from './ExpForm'

export class CreateExp extends Component {
    
    onSubmit = (formValues)=>{
        this.props.expCreate(formValues)
    }

    render() {
        return (
            <div>
                <h3>Experience Edu</h3>
                <ExpForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect (null,{expCreate}) (CreateExp)
