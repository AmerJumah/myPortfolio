import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo,editInfo} from '../../../actions/infoActions'
import  InfoForm  from './InfoForm'

class EditInfo extends React.Component {
    componentDidMount(){
        this.props.fetchInfo(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editInfo(this.props.info.id,formValues)
    }

    render(){
        if(!this.props.info){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Info  </h3>
                <InfoForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.info,'title','desc')} />
            </div>
        )
    
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        info : state.info[ownProps.match.params.id]
    }
}



export default connect (mapStateToProps , {fetchInfo,editInfo}) (EditInfo)
