import _ from 'lodash'
import { CREATE_CONT, DELETE_CONT, FETCH_CONTS } from "../actions/types";

export default (state = {},action) => {
    switch(action.type){
        case FETCH_CONTS : 
            return {...state, ..._.mapKeys(action.payload, 'id')}
        
        case CREATE_CONT:
            return {...state , [action.payload.id] : action.payload}
        case DELETE_CONT :
            return _.omit(state, action.payload)

        default :
            return state
    }
}