import React, { Component } from 'react'
import {connect} from 'react-redux'
import {infoCreate} from '../../../actions/infoActions'
import InfoForm from './InfoForm'

export class CreateInfo extends Component {
    
    onSubmit=(formValues)=>{
        this.props.infoCreate(formValues)
    }

    render() {
        
        return (
            <div>
              <h3>New Info</h3>
              <InfoForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default connect(null,{infoCreate})(CreateInfo)