import React from 'react'
import {connect} from 'react-redux'
import {googleCredit} from '../../../credentials'
import {fetchConts , deleteCont} from '../../../actions/contActions'



class MyContacts extends React.Component {
    componentDidMount(){
        this.props.fetchConts()
    }

    renderContact (){
        return this.props.contact.map(contact => {
            return (
                <div className='item' key={contact.id}>
                    
                    <div className='header'>{contact.name}</div>
                    <div className='list'>
                        <div className='right floated content'>
                            <button
                                className='ui button negative'
                                onClick={()=>this.handleDelete(contact.id)}
                            > Delete    
                            </button>
                        </div>
                        <div className='item'>
                            <span className='header'>E-mail : </span>{contact.email}
                        </div>
                        <div>
                            <span className='header'>Subject : </span>{contact.subject}
                        </div>
                        <div>
                            <span className='header'>Query : </span>{contact.query}
                        </div>
                        
                    </div>
                </div>
            )
        })
    }

    handleDelete = (id) =>{
        this.props.deleteCont(id)
    }

    render (){
        
        if(this.props.isSignedIn && this.props.userId === googleCredit.userId){
            return (
                <div>
                    
                    <div className="ui celled list">
                        {this.renderContact()}
                    </div>
                    
                </div>
            )
        }
        return <h3>Please sign in</h3>
    }
}

const mapStateToProps =(state) =>{
    return {
        contact : Object.values(state.contact),
        userId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
}
export default connect (mapStateToProps,{fetchConts,deleteCont}) (MyContacts)
