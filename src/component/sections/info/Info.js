import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchInfos} from '../../../actions/infoActions'
import {googleCredit} from '../../../credentials'



class Info extends React.Component {
    componentDidMount(){
        this.props.fetchInfos()
    }

    renderInfo(){
        return this.props.info.map(inf=>{
            return (
                <div className='item' key={inf.id}>
                    {this.renderAdmin(inf)}
                    <div className='content'>
                        <div className='header'>
                            {inf.title}
                        </div>
                        <div className='description'>{inf.desc}</div>
                    </div>
                    
                </div>
            )
        })
    }

    renderAdmin(info){
        if(this.props.isSignedIn && info.userId === this.props.userId){
            return(
                <div className='right floated content'>
                    <Link to={`/info/edit/${info.id}`} className="ui button primary">Edit</Link>
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
                    <Link to='/info/create' className='ui button negative'>
                        Add new
                    </Link>
                </div>
            )
        }else return null
    }

    render(){

        return (
            <div>
               <h2>Personal Information</h2>
                <div className="ui celled list">
                    {this.renderInfo()}
                </div>
                {this.renderCreate()}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        info : Object.values(state.info),
        userId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{fetchInfos})(Info)
