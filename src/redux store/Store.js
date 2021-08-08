const initialState = {
    Name:null
}

const Reducer = (state = initialState,action) => {
    switch(action.type){
        case 'Entername':
            return {
                ...state,
                Name:action.payload
            }
        case 'RatethePhoto':
            
            return {...state};
        case 'NextProject':
            return{...state};

        default:
            return state;
    }
}

export default Reducer;