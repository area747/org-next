const orgOptionState = {
    useMember: false,
    viewSize: 1,
};

export const setOrgOption = (diff: typeof orgOptionState) => ({
    type: 'SET_ORG_OPTION' as const,
    payload: diff,
});

type OrgOptionState = typeof orgOptionState;
type OrgOptionAction = ReturnType<typeof setOrgOption>;

export function OrgOption(state: OrgOptionState = orgOptionState, action: OrgOptionAction): OrgOptionState {
    switch (action.type) {
        case 'SET_ORG_OPTION':
            state = Object.assign({}, action.payload);
            return state;
        default:
            return state;
    }
}
