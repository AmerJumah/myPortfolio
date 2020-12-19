import React, { Component } from 'react'
import {connect} from 'react-redux'

import { skillCreate } from '../../../actions/skillsActions'
import SkillsForm from './SkillsForm'

export class CreateSkill extends Component {
    
    onSubmit = (formValues)=>{
        this.props.skillCreate(formValues)
    }

    render() {
        return (
            <div>
                <h3>Add new Skill</h3>
                <SkillsForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect (null,{skillCreate}) (CreateSkill)
