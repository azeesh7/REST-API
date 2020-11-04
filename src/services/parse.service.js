/** METHOD 1**/
const methodpostversion1 = function(body){

    var input=body.data;
    const regex=/0{3,4}/;
    const eresult=input.split(regex);   
    const _clientid=eresult[2].match(/.{1,3}/g);
    var output = outputResponse(eresult[0],eresult[1],_clientid[0]+'-'+_clientid[0]);        
    return output;
}

/** METHOD 2**/
const methodpostversion2 = function(body){
    var input=body.data;
    const regex1=/(?<=0{4})/;   
    const result1=input.split(regex1);  
    const regex2=/(?<=0{3})/; 
    const result2=result1[1].split(regex2);   
    var output = outputResponse(result1[0],result2[0],result2[1]);        
    return output;        
}

const outputResponse = function(_firstName,_lastName,_clientId){
    let outputdata = { 
        firstName: _firstName,
        lastName: _lastName, 
        clientId: _clientId       
    };
    let result = { 
        statusCode: 200,
        data:outputdata
    };      
    return JSON.stringify(result);
}

module.exports = {   
    methodpostversion1: methodpostversion1,
    methodpostversion2: methodpostversion2
};