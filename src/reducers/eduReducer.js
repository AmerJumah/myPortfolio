import _ from 'lodash'
import { CREATE_EDU, EDIT_EDU, FETCH_EDUS, FETCH_EDU } from "../actions/types";

export default (state = {},action) => {
    switch(action.type){
        case FETCH_EDUS : 
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_EDU:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_EDU:
            return {...state , [action.payload.id] : action.payload}
        case EDIT_EDU:
            return { ...state, [action.payload.id]: action.payload };

        default :
            return state
    }
}