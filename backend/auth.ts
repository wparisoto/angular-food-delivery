import { Request, Response } from 'express';

export const handleAuthentication = (request: Request, response: Response) => {
    const user = request.body

    response.status(403).json({message: 'Dados inválidos'})

    // if(isValid(user)){
        
    // }else{
    //     response.status(403).json({message: 'Dados inválidos'})
    // }
}

function isValid(user): boolean{
    return false;
}