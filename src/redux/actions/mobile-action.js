
export const buyMobile=()=>{
    return{
        type:"BUY_MOBILE"
    }
}

export const sellMobile=()=>{
    return{
        type:"SELL_MOBILE"
    }
}

export const getAllUsers=()=>{
    return{
        type:"GET_ALL_USERS"
    }
}
export const getSingleUser=(id)=>{
    return{
        type:"GET_SINGLE_USER",id
    }
}
export const addUser=(payload)=>{
    console.log(payload);
    return{
        type:"ADD_USER",payload
    }
}