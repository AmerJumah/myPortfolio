import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import informationReducer from './informationReducer'
import authReducer from './authReducer'
import eduReducer from './eduReducer'
import expReducer from './expReducer'
import skillsReducer from './skillsReducer'
import contactReducer from './contactReducer'
import loadingReducer from './loadingReducer'

export default combineReducers ({
    form : formReducer,
    info : informationReducer,
    auth : authReducer,
    edu : eduReducer,
    exp : expReducer,
    skills : skillsReducer,
    contact : contactReducer,
    loading : loadingReducer
})