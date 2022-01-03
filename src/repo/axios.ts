import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const baseUrl = 'http://localhost:23080/orgn';
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
};
const baseData = {
    requestId: '1',
    resultId: 'RESULT_00001',
    handlerName: 'ApiMessageHandler',
};
const api = {
    getRequest(url: string) {
        return axios.get(`${baseUrl}/${url}`, {headers});
    },

    async postRequest(url: string, data: Object) {
        const res = await axios.post(`${baseUrl}/${url}`, Object.assign(baseData, data), {headers});
        return res.data?.resMessage?.RESULT_00001;
    },
    async message(data: Object) {
        const res = await axios.post(`${baseUrl}/api/cmm/message.json`, Object.assign(baseData, data), {headers});
        return res.data?.resMessage?.RESULT_00001;
    },
    async messageList(data: Object) {
        const res = await axios.post(`${baseUrl}/api/cmm/messageList.json`, Object.assign(baseData, data), {headers});
        return res.data?.list;
    },
};

// const mock = new MockAdapter(axios);
// mock.onPost('http://localhost:23080/orgn/orgList').reply(200, require('../mockData/orgData.json'));
// mock.onPost('http://localhost:23080/orgn/empList').reply(200, require('../mockData/empData.json'));

export default api;
