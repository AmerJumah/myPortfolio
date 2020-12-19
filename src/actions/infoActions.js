import informations from '../apis/informations'
import {CREATE_INFO,FETCH_INFOS,FETCH_INFO,EDIT_INFO,DELETE_INFO} from './types'
import history from '../history'


export const infoCreate = formValues => async (dispatch,getState) => {
    const {userId} = getState().auth
    const res = await informations.post('/informations',{...formValues,userId})
    dispatch ({type : CREATE_INFO , payload : res.data})
    history.push('/info')
}
export const fetchInfos = () => async dispatch => {
    const res = await informations.get('/informations');
    
    dispatch({ type: FETCH_INFOS, payload: res.data });
};

export const fetchInfo = id => async dispatch => {
    const res = await informations.get(`/informations/${id}`);
  
    dispatch({ type: FETCH_INFO, payload: res.data });
  };

export const editInfo = (id, formValues) => async dispatch => {
    const res = await informations.patch(`/informations/${id}`, formValues);
 
    dispatch({ type: EDIT_INFO, payload: res.data });
    history.push('/info')
};

export const deleteInfo = id => async dispatch => {
    await informations.delete(`/informations/${id}`);

   dispatch({ type: DELETE_INFO, payload: id });
 };




