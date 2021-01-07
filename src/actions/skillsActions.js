import informations from '../apis/informations'
import history from '../history'
import { CREATE_SKILL , FETCH_SKILL, FETCH_SKILLS , EDIT_SKILL } from './types'

export const skillCreate = formValues => async(dispatch,getState) =>{
    const {userId} = getState().auth
    const res = await informations.post('/skills',{...formValues,userId})
    dispatch ({type : CREATE_SKILL , payload : res.data})
    history.push('/skills')
}
export const fetchSkills = () => async dispatch =>{
    const res = await informations.get('/skills')
    dispatch({type : FETCH_SKILLS , payload : res.data})
    dispatch({type: 'HIDE_LOADER'})
}
export const fetchSkill = (id) => async dispatch =>{
    const res = await informations.get(`/skills/${id}`)
    dispatch({type : FETCH_SKILL , payload : res.data})
}

export const skillEdit = (id,formValues) => async dispatch =>{
    const res = await informations.patch(`/skills/${id}`,formValues)
    dispatch({type : EDIT_SKILL , payload : res.data})
    history.push('/skills')
}



