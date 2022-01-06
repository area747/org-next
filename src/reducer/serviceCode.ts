import {Dispatch} from 'redux';
import api from '../repo/axios';

let serviceList = {
    orgTypeCd: [] as Array<any>,
    posCd: [] as Array<any>,
    dutyCd: [] as Array<any>,
    nodeDesign: [] as Array<any>,
};

export const loadServiceCode = () => (dispatch: Dispatch) => {
    loadData().then(([orgTypeCd, posCd, dutyCd, nodeDesign]) => {
        orgTypeCd.unshift({code: '9999', codeName: '전체'});
        dispatch(setOrgTypeCd(orgTypeCd));
        dispatch(setNodeDesign(nodeDesign));
    });
};

export const setService = (diff: typeof serviceList) => ({
    type: 'SET_SERVICE' as const,
    payload: diff,
});

export const setOrgTypeCd = (diff: typeof serviceList.orgTypeCd) => ({
    type: 'SET_EMP_TYPE_CD' as const,
    payload: diff,
});

export const setPosCd = (diff: typeof serviceList.posCd) => ({
    type: 'SET_POS_CD' as const,
    payload: diff,
});

export const setDutyCd = (diff: typeof serviceList.dutyCd) => ({
    type: 'SET_DUTY_CD' as const,
    payload: diff,
});

export const setNodeDesign = (diff: typeof serviceList.nodeDesign) => ({
    type: 'SET_NODE_DESIGN' as const,
    payload: diff,
});

type ServiceState = typeof serviceList;
type ServiceAction = ReturnType<typeof setService | typeof setOrgTypeCd | typeof setPosCd | typeof setDutyCd | typeof setNodeDesign>;

export function ServiceCode(state: ServiceState = serviceList, action: ServiceAction): ServiceState {
    switch (action.type) {
        case 'SET_SERVICE':
            state = Object.assign({}, action.payload);
            return state;
        case 'SET_EMP_TYPE_CD':
            state = {...state, orgTypeCd: action.payload};
            return state;
        case 'SET_POS_CD':
            state = {...state, posCd: action.payload};
            return state;
        case 'SET_NODE_DESIGN':
            state = {...state, nodeDesign: action.payload};
            return state;
        default:
            return state;
    }
}

const loadData = () => {
    return Promise.all([
        api.message({
            messageName: 'SVC_R_000010',
            reqMessage: {
                companySeq: '132000',
                codeType: 'SSP_ORG_TYPE_CD',
                useYn: 'Y',
            },
        }),
        api.message({
            messageName: 'SVC_R_000010',
            reqMessage: {
                companySeq: '132000',
                codeType: 'SSP_POS_CD',
                useYn: 'Y',
            },
        }),
        api.message({
            messageName: 'SVC_R_000010',
            reqMessage: {
                companySeq: '132000',
                codeType: 'SSP_DUTY_CD',
                useYn: 'Y',
            },
        }),
        api.message({
            messageName: 'SVC_R_000010',
            reqMessage: {
                companySeq: '132000',
                codeType: 'SSP_NODE_DESIGN',
                useYn: 'Y',
            },
        }),
    ]);
};

// api.messageList({
//     requestId: '1',
//     transactionYn: '',
//     list: [
//         {
//             resultId: 'nodeDesign',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_NODE_DESIGN',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'orgTypeCd',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_ORG_TYPE_CD',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'posCd',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_POS_CD',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'dutyCd',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_DUTY_CD',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'orgNmLangBind',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_ORG_NM_LANG_BIND',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'orgCompareDataBind',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_ORG_COMPARE_DATA_BIND',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'empEvalDataBindCd',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_EMP_EVAL_DATA_BIND_CD',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'orgOrderCd',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_ORG_ORDER_CD',
//                 useYn: 'Y',
//             },
//         },
//         {
//             resultId: 'orgSummaryItem',
//             handlerName: 'ApiMessageHandler',
//             messageName: 'SVC_R_000010',
//             reqMessage: {
//                 companySeq: '132000',
//                 codeType: 'SSP_ORG_SUMMARY_ITEM',
//                 useYn: 'Y',
//             },
//         },
//     ],
// });
