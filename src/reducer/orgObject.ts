import {OrgData, OrgObject, Template} from 'orgObject';
import {Dispatch} from 'redux';
import api from '../repo/axios';

export const setOrgObject = (diff: OrgObject) => ({
    type: 'SET_ORG_OBJECT' as const,
    payload: diff,
});

export const loadOrgData = () => (dispatch: Dispatch) =>
    loadData().then(orgList => {
        orgData.orgData = orgList;
        dispatch(setOrgObject(orgData));
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

const loadData = () => {
    return Promise.all([
        api.message({
            messageName: 'ORG_R_000011',
            reqMessage: {
                companySeq: '132000',
                baseYmd: '2021-12-20',
                orgId: '41030001',
                subOrgYn: 'Y',
                matrixYn: 'N',
            },
        }),
        api.message({
            messageName: 'EMP_R_000020',
            reqMessage: {
                companySeq: '132000',
                baseYmd: '2021-12-20',
                subOrgYn: 'Y',
                orgId: '41030001',
                columnFilterList: ['orgNm', 'empNm', 'dutyNm', 'posNm', 'schNm', 'addr'],
                emptyPos: false,
                matrixYn: 'N',
            },
        }),
    ]).then(([orgList, empList]) => {
        let res = mergeData(orgList, empList);
        let orgData = makeOrgData(res);
        return orgData;
    });
};

const mergeData = (orgData: Array<any>, empData: Array<any>) => {
    empData = empData.filter((empItem, empIdx, arr) => {
        if (empItem.leaderYn === 'Y') {
            orgData.some(orgItem => {
                if (orgItem.orgId === empItem.orgId) {
                    Object.assign(orgItem, empItem);
                    return true;
                }
                return false;
            });
            return false;
        }
        empItem.isMember = true;
        return true;
    });
    return orgData.concat(empData);
};

const makeOrgData = (orgList: Array<any>) => {
    let array: Array<OrgData> = [];
    orgList.forEach((item, idx, arr) => {
        if (item.isMember) {
            item.pkey = item.empId;
            item.mkey = item.orgId;
        } else {
            item.pkey = item.orgId;
            item.rkey = item.upOrgId;
        }
        array.push({
            fields: item,
            template: 'photoType',
            link: {
                template: 'linkSolid',
            },
        });
    });
    return array;
};

const orgData: OrgObject = {
    model: {
        pkey: 'pkey',
        rkey: 'rkey',
        order: ['orgSortOrder', 'empSortOrder'],
        fields: [],
    },
    template: (() => {
        let template: Template = require('../mockData/nodeTemplate.json');
        let bind = require('../mockData/bind.json');
        Object.keys(bind).forEach((item, idx, arr) => {
            let str = JSON.stringify(template.nodes[item]?.units);
            let strList = JSON.stringify(template.nodes[item + 'List']?.units);
            Object.keys(bind[item]).forEach(bindItem => {
                str = str.replace(bindItem, bind[item][bindItem]);
                strList = strList.replace(bindItem, bind[item][bindItem]);
            });
            template.nodes[item].units = JSON.parse(str);
            template.nodes[item + 'List'].units = JSON.parse(strList);
        });
        return template;
    })(),
};

export default orgObject;
