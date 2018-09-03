"use strict";
exports.__esModule = true;
exports.handleAuthentication = function (request, response) {
    var user = request.body;
    response.status(403).json({ message: 'Dados inválidos' });
    // if(isValid(user)){
    // }else{
    //     response.status(403).json({message: 'Dados inválidos'})
    // }
};
function isValid(user) {
    return false;
}
