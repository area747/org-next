import {Dispatch} from 'redux';
import {INOrg} from 'inorg';

export enum inorgAction {
    setInorg = 'SET_INORG',
}

function inorg(state: INOrg, action: any): INOrg {
    switch (action.type) {
        case inorgAction.setInorg:
            state = action.payload;
            return state;

        default:
            return state;
            break;
    }
}

export default inorg;
