import _ from 'lodash'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {skillEdit,fetchSkill} from '../../../actions/skillsActions'
import SkillsForm from './SkillsForm'

class SkillsEdit extends Component {
    componentDidMount(){
        this.props.fetchSkill(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{
        this.props.skillEdit(this.props.skills.id,formValues)
    }

    render() {
        return (
            <div>
               <SkillsForm 
                initialValues = {_.pick(this.props.skills,'skill','level','duration','key')}
                onSubmit = {this.onSubmit}
               /> 
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
   return {skills : state.skills[ownProps.match.params.id]}
}
export default connect (mapStateToProps,{skillEdit,fetchSkill}) (SkillsEdit)
