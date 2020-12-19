import _ from 'lodash'
import { CREATE_EXP, EDIT_EXP, FETCH_EXPS, FETCH_EXP } from "../actions/types";

export default (state = {},action) => {
    switch(action.type){
        case FETCH_EXPS : 
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_EXP:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_EXP:
            return {...state , [action.payload.id] : action.payload}
        case EDIT_EXP:
            return { ...state, [action.payload.id]: action.payload };

        default :
            return state
    }
}