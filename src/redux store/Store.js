const initialState = {
    Name:null,
    GroupId:null,
    GroupName:null
}

const Reducer = (state = initialState,action) => {
    switch(action.type){
        case 'ENTERTHENAME':
            return {
                ...state,
                Name:action.payload
            }
        case 'RATETHE':
            
            return {...state};

        case 'ENTERTHEGROUP':
            return {
                ...state,
                GroupId:action.payload
            }

        
        case 'NextProject':
            return{...state};

        default:
            return state;
    }
}

export default Reducer;