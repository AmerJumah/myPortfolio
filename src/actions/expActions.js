import informations from '../apis/informations'
import history from '../history'
import { CREATE_EXP , FETCH_EXP, FETCH_EXPS , EDIT_EXP } from './types'

export const expCreate = formValues => async(dispatch,getState) =>{
    const {userId} = getState().auth
    const res = await informations.post('/experience',{...formValues,userId})
    dispatch ({type : CREATE_EXP , payload : res.data})
    history.push('/experience')
}
export const fetchExps = () => async dispatch =>{
    const res = await informations.get('/experience')
    dispatch({type : FETCH_EXPS , payload : res.data})
    dispatch({type: 'HIDE_LOADER'})
}
export const fetchExp = (id) => async dispatch =>{
    const res = await informations.get(`/experience/${id}`)
    dispatch({type : FETCH_EXP , payload : res.data})
}

export const expEdit = (id,formValues) => async dispatch =>{
    const res = await informations.patch(`/experience/${id}`,formValues)
    dispatch({type : EDIT_EXP , payload : res.data})
    history.push('/experience')
}



