import { Request, Response } from 'express';
import { AddUserInGroupPayload } from '../interface/auth';
import { createGroup, addUserIntoGroup } from '../cognito/cognito';

export async function createGroupInCognito( req: Request, res: Response ) {
    try {
        const { group_name } = req.body;
        const result = await createGroup( group_name )

        res.status(200).json({
            response: result,
            message: "Group added in cognito"
        })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
}

export async function addUserInCognitoGroup( req: Request, res: Response ) {
    try {
        const { user_email, group_name } = req.body
        const payload: AddUserInGroupPayload = {
            groupName : group_name,
            userName: user_email
        }

        const result = await addUserIntoGroup(payload);
        res.status(200).json({
            response: result,
            message: "user added to group"
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}