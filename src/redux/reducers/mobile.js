
const initialState={noOfMobiles:10,users:[],user:{}}
export function mobileReducer(state=initialState,action) {
    switch(action.type){
        case "BUY_MOBILE_SUCCESS":
            console.log('buy');
            return {...state,noOfMobiles:state.noOfMobiles-1}
        case "SELL_MOBILE_SUCCESS":
            return {...state,noOfMobiles:state.noOfMobiles+1}
        case "GET_ALL_USERS_SUCCESS":
            return {...state,users:action.payload}
        case "GET_SINGLE_USER_SUCCESS":
            return {...state,user:action.payload}
        case "GET_SINGLE_USER_FAILED":
            return {...state,message:action.message}
        case "ADD_USER_SUCCESS":{
            let users=[...state.users]
            users.push(action.payload)
            return {...state,users}
        }
            
        case "ADD_USER_FAILED":
            return {...state,message:action.message}
        default:
            return state;
    }
    
}


