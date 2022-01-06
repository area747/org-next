const orgOptionState = {
    useMember: false,
    orgTypeLevel: '9999',
    viewSize: 1,
};

export const setOrgOption = (diff: typeof orgOptionState) => ({
    type: 'SET_ORG_OPTION' as const,
    payload: diff,
});

export const setUseMember = (diff: typeof orgOptionState.useMember) => ({
    type: 'SET_USE_MEMBER' as const,
    payload: diff,
});

export const setOrgTypeLevel = (diff: typeof orgOptionState.orgTypeLevel) => ({
    type: 'SET_ORG_TYPE_LEVEL' as const,
    payload: diff,
});

type OrgOptionState = typeof orgOptionState;
type OrgOptionAction = ReturnType<typeof setOrgOption | typeof setOrgTypeLevel | typeof setUseMember>;

export function OrgOption(state: OrgOptionState = orgOptionState, action: OrgOptionAction): OrgOptionState {
    switch (action.type) {
        case 'SET_ORG_OPTION':
            state = Object.assign({}, action.payload);
            return state;
        case 'SET_USE_MEMBER':
            state = {...state, useMember: action.payload};
            return state;
        case 'SET_ORG_TYPE_LEVEL':
            state = {...state, orgTypeLevel: action.payload};
            return state;
        default:
            return state;
    }
}
