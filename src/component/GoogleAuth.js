import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions/authActions'
import {googleCredit} from '../credentials'

export class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId : googleCredit.clientId ,
                scope : 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else {
            this.props.signOut()
        }
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        }else if (this.props.isSignedIn) {
            return <button onClick={()=>this.auth.signOut()} className='ui red google button'>
                <i className = 'google icon'/>
                Logout</button>
        } else {
            return <button onClick={()=>this.auth.signIn()} className='ui red google button'>
                <i className = 'google icon'/>
                Admin login</button>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {isSignedIn : state.auth.isSignedIn}
}
export default connect (mapStateToProps , {signIn , signOut}) (GoogleAuth)