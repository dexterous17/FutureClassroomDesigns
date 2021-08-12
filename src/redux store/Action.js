export const ENTERTHENAME = (data) =>{
    return{
        type:'ENTERTHENAME',
        payload:data
    };
};

export const RATETHEPROJECT = (data) =>{
    return{
        type:'RatethePhoto',
        payload:data
    }
}


export const NEXTPROJECT = (data) =>{
    return{
        type:"NextProject",
        payload:data
    }
}

export const ENTERTHEGROUP = (data) =>{
    return{
        type:"ENTERTHEGROUP",
        payload:data
    }
}