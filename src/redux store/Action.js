export const ENTERTHENAME = (data) =>{
    return{
        type:'Entername',
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