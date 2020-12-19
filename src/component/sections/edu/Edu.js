import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEdus} from '../../../actions/eduActions'
import {googleCredit} from '../../../credentials'

class Edu extends React.Component {
    componentDidMount(){
        this.props.fetchEdus()
    }


    renderAdmin(edu){
        if(this.props.isSignedIn && edu.userId === this.props.userId){
            return(
                <div className='right floated content'>
                    <Link to={`/education/edit/${edu.id}`} className="ui button primary">Edit</Link>
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
                    <Link to='/education/create' className='ui button negative'>
                        Add new
                    </Link>
                </div>
            )
        }else return null
    }

    renderEdu (){
        return this.props.edu.map(edu => {
            return (
                <div className='item' key={edu.id}>
                    
                    <div className='header'>{edu.course}</div>
                    <div className='list'>
                        {this.renderAdmin(edu)}
                        <div className='item'>
                            <span className='header'>Organisation : </span>{edu.school}
                        </div>
                        <div>
                            <span className='header'>Duration : </span>{edu.duration}
                        </div>
                        <div>
                            <span className='header'>Date Acquired : </span>{edu.date}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render (){
        return (
            <div>
                <h3>Education & Courses</h3>
                <div className="ui celled list">
                    {this.renderEdu()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {
        edu : Object.values(state.edu),
        userId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
}
export default connect (mapStateToProps,{fetchEdus}) (Edu)
