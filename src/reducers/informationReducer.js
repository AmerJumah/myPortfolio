import _ from 'lodash'
import {CREATE_INFO, DELETE_INFO, EDIT_INFO, FETCH_INFOS ,FETCH_INFO } from '../actions/types'

export default (state={},action)=>{
    switch (action.type){
        case FETCH_INFOS:
            return{...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_INFO:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_INFO:
            return {...state , [action.payload.id] : action.payload}
        case EDIT_INFO:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_INFO:
            return _.omit(state, action.payload);
        default :
            return state
    }
}