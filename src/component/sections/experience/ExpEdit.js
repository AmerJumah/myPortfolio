import _ from 'lodash'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {expEdit,fetchExp} from '../../../actions/expActions'
import ExpForm from './ExpForm'

class ExpEdit extends Component {
    componentDidMount(){
        this.props.fetchExp(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{
        this.props.expEdit(this.props.exp.id,formValues)
    }

    render() {
        return (
            <div>
               <ExpForm 
                initialValues = {_.pick(this.props.exp,'title','company','duration','startDate','endDate','desc')}
                onSubmit = {this.onSubmit}
               /> 
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
   return {exp : state.exp[ownProps.match.params.id]}
}
export default connect (mapStateToProps,{fetchExp,expEdit}) (ExpEdit)
