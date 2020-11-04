const should = require('should');
const assert = require('assert');
const axios = require('axios');
let address='http://localhost:3000';
describe('v1 api', () => {
    it('V1 API Endpoint Parsing', async () => {

            const response = await axios.post(address+'/api/v1/parse', {
                data: "JOHN0000MICHAEL0009994567"
            });
             //console.log(response);
            assert.deepStrictEqual(200, response.status);

    })
});


describe('v2 api', () => {
    it('V2 API Endpoint Parsing', async () => {
            const response = await axios.post(address+'/api/v2/parse', {
                data: "JOHN0000MICHAEL0009994567"
            });
            // console.log(response.data);
            assert.deepStrictEqual(200, response.status);
    })
});

