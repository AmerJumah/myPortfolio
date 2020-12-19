import informations from '../apis/informations'
import { CREATE_CONT , FETCH_CONTS , DELETE_CONT } from './types'
import history from '../history'

export const contCreate = formValues => async(dispatch) =>{
    const res = await informations.post('/contacts',{...formValues})
    dispatch ({type : CREATE_CONT , payload : res.data})
    history.push('/thanks')
}
export const fetchConts = () => async dispatch =>{
    const res = await informations.get('/contacts')
    dispatch({type : FETCH_CONTS , payload : res.data})
}
export const deleteCont = id => async dispatch => {
    await informations.delete(`/contacts/${id}`);

   dispatch({ type: DELETE_CONT, payload: id });
   history.push('/my$contacts')
 };


