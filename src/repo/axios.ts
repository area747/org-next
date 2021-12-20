import axios from 'axios';
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
};
export default api;
