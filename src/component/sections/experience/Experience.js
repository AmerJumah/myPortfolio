import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchExps} from '../../../actions/expActions'
import {googleCredit} from '../../../credentials'
import ReactHtmlParser from 'react-html-parser'

class Experience extends React.Component {
    componentDidMount(){
        this.props.fetchExps()
    }


    renderAdmin(exp){
        if(this.props.isSignedIn && exp.userId === this.props.userId){
            return(
                <div className='right floated content'>
                    <Link to={`/experience/edit/${exp.id}`} className="ui button primary">Edit</Link>
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
                    <Link to='/experience/create' className='ui button negative'>
                        Add new
                    </Link>
                </div>
            )
        }else return null
    }

    renderExp (){
        return this.props.exp.map(exp => {
            return (
                <div className='item' key={exp.id}>
                    
                    <div className='header'>{exp.title}</div>
                    <span> {exp.duration} </span>
                    <span> {exp.startDate} to </span>
                    <span> {exp.endDate} </span>
                    <div className='list'>
                        {this.renderAdmin(exp)}
                        <div className='item'>
                            <span className='header'>Organization : </span>{exp.company}
                        </div>
                        
                        <div>
                            <span className='header'>Description : </span>{ReactHtmlParser(exp.desc)}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render (){
        return (
            <div>
                <h3>My Experience</h3>
                <div className="ui celled list">
                    {this.renderExp()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {
        exp : Object.values(state.exp),
        userId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
}
export default connect (mapStateToProps,{fetchExps}) (Experience)
