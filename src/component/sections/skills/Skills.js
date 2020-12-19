import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSkills} from '../../../actions/skillsActions'
import {googleCredit} from '../../../credentials'

class Skills extends React.Component {
    componentDidMount(){
        this.props.fetchSkills()
    }


    renderAdmin(skills){
        if(this.props.isSignedIn && skills.userId === this.props.userId){
            return(
                <div className='right floated content'>
                    <Link to={`/skills/edit/${skills.id}`} className="ui button primary">Edit</Link>
                </div>
            )
        }else{
            return null
        }
    }

    renderCreate(){
        if(this.props.isSignedIn && this.props.userId === googleCredit.userId){
            return (
                <div style={{textAlign:"right"}}>
                    <Link to='/skills/create' className='ui button negative'>
                        Add new
                    </Link>
                </div>
            )
        }else return null
    }

    renderSkill (){
        return this.props.skills.map(skill => {
            return (
                <div className='item' key={skill.id}>
                    
                    <div className='header'>{skill.skill}</div>
                    <div className='list'>
                        {this.renderAdmin(skill)}
                        <div className='item'>
                            <span className='header'>Level : </span>{skill.level}
                        </div>
                        <div>
                            <span className='header'>Duration : </span>{skill.duration}
                        </div>
                        <div>
                            <span className='header'>Key Skill : </span>{skill.key}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render (){
        return (
            <div>
                <h3>Skills</h3>
                <div className="ui celled list">
                    {this.renderSkill()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {
        skills : Object.values(state.skills),
        userId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
}
export default connect (mapStateToProps,{fetchSkills}) (Skills)
