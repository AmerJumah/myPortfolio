import _ from 'lodash'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {eduEdit,fetchEdu} from '../../../actions/eduActions'
import EduForm from './EduForm'

class EduEdit extends Component {
    componentDidMount(){
        this.props.fetchEdu(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{
        this.props.eduEdit(this.props.edu.id,formValues)
    }

    render() {
        return (
            <div>
               <EduForm 
                initialValues = {_.pick(this.props.edu,'course','school','duration','date')}
                onSubmit = {this.onSubmit}
               /> 
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
   return {edu : state.edu[ownProps.match.params.id]}
}
export default connect (mapStateToProps,{fetchEdu,eduEdit}) (EduEdit)
