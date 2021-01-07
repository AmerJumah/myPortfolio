export default (state = {loading : false},action) => {
    switch(action.type){
        case 'HIDE_LOADER' : 
            return {...state, loading : true}
        default :
            return state
    }
}