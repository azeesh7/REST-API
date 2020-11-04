Start App: 
INSTALL Node Modules: npm install 
START the APP: npm start

RUN TEST CASES: npm test

OUTPUT CODE COVERAGE: npm run coverage

REQUEST1:
TYPE: POST
END POINT 1: http://localhost:3000/api/v1/parse
BODY: {
    "data":"JOHN0000MICHEAL0009994567"
}

RESPONSE BODY: {"statusCode":200,"data":{"firstName":"JOHN","lastName":"MICHEAL","clientId":"999-999"}}


REQUEST2:
TYPE: POST
END POINT 1: http://localhost:3000/api/v2/parse
BODY: {
    "data":"JOHN0000MICHEAL0009994567"
}

RESPONSE BODY: {"statusCode":200,"data":{"firstName":"JOHN0000","lastName":"MICHEAL000","clientId":"9994567"}}
