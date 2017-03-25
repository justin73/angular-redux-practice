import { INCREMENT } from './actions';
import { tassign } from 'tassign';


export interface IAppState {
    counter: number;
    messaging:{
        company_name:string
        newMessages:number;
        msg_title: string;
        msg_content: string
    }
}

export const INITIAL_STATE:IAppState = {
    counter : 0,
    messaging:{
        company_name:'',
        newMessages:5,
        msg_title: "",
        msg_content: ""
    }
}
export function rootReducer( state:IAppState, action):IAppState {
    switch(action.type){
        // case INCREMENT: return {counter: state.counter+1, messaging:{ newMessages:state.messaging.newMessages+1}};
        // case 'INITIALIZATION':
        //     return tassign(state, {counter: 0, messaging:{company_name: action.payload.company_name}})
        case INCREMENT: 
            return tassign(state, {counter: state.counter+1, messaging:{company_name: action.payload.title}})
    }
    return state;
}
