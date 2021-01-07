import informations from '../apis/informations'
import history from '../history'
import { CREATE_EDU , FETCH_EDU, FETCH_EDUS , EDIT_EDU } from './types'

export const eduCreate = formValues => async(dispatch,getState) =>{
    const {userId} = getState().auth
    //const {userId} = getState().auth
    const res = await informations.post('/education',{...formValues,userId})
    dispatch ({type : CREATE_EDU , payload : res.data})
    history.push('/education')
}
export const fetchEdus = () => async dispatch =>{
    const res = await informations.get('/education')
    dispatch({type : FETCH_EDUS , payload : res.data})
    dispatch({type: 'HIDE_LOADER'})
}
export const fetchEdu = (id) => async dispatch =>{
    const res = await informations.get(`/education/${id}`)
    dispatch({type : FETCH_EDU , payload : res.data})
}

export const eduEdit = (id,formValues) => async dispatch =>{
    const res = await informations.patch(`/education/${id}`,formValues)
    dispatch({type : EDIT_EDU , payload : res.data})
    history.push('/education')
}



