import _ from 'lodash'
import { CREATE_SKILL, EDIT_SKILL, FETCH_SKILLS, FETCH_SKILL } from "../actions/types";

export default (state = {},action) => {
    switch(action.type){
        case FETCH_SKILLS : 
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_SKILL:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_SKILL:
            return {...state , [action.payload.id] : action.payload}
        case EDIT_SKILL:
            return { ...state, [action.payload.id]: action.payload };

        default :
            return state
    }
}