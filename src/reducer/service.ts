let serviceList = {
    empTypeCd: [] as Array<any>,
};

export const setService = (diff: typeof serviceList) => ({
    type: 'SET_SERVICE' as const,
    payload: diff,
});

export const setEmpTypeCd = (diff: typeof serviceList.empTypeCd) => ({
    type: 'SET_EMP_TYPE_CD' as const,
    payload: diff,
});

type ServiceState = typeof serviceList;
type ServiceAction = ReturnType<typeof setService | typeof setEmpTypeCd>;

export function Service(state: ServiceState = serviceList, action: ServiceAction): ServiceState {
    switch (action.type) {
        case 'SET_SERVICE':
            state = Object.assign({}, action.payload);
            return state;
        case 'SET_EMP_TYPE_CD':
            state = {...state, empTypeCd: action.payload};
        default:
            return state;
    }
}
