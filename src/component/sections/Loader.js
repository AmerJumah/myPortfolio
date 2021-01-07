import React from 'react'
import {connect} from 'react-redux'

const Loader = (props) => {

    if(!props.loading.loading){
        return <div class="ui active centered inline loader"></div>
    }
    return null        
}

const mapStateToProps = state => {
    return {loading : state.loading}
}
export default connect (mapStateToProps)(Loader)
