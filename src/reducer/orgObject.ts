import {OrgObject} from 'orgObject';
import {Dispatch} from 'redux';

export const setOrgObject = (diff: OrgObject) => ({
    type: 'SET_ORG_OBJECT' as const,
    payload: diff,
});

type orgObjectAction = ReturnType<typeof setOrgObject>;

const initOrgObject: OrgObject = {
    model: {
        pkey: '',
        rkey: undefined,
        mkey: undefined,
        order: undefined,
        fields: [],
    },
    template: {
        nodes: {},
        links: undefined,
    },
};

function orgObject(state: OrgObject = initOrgObject, action: orgObjectAction): OrgObject {
    switch (action.type) {
        case 'SET_ORG_OBJECT':
            state = Object.assign({}, action.payload);
            return state;

        default:
            return state;
            break;
    }
}

export default orgObject;
