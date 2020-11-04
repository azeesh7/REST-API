const parseService = require('../services/parse.service');

const post = function(req, res){    
    res.send(parseService.methodpostversion2(req.body));
}


module.exports = {
    post
};