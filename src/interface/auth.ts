export interface CognitoSignupPayload {
    email: string,
    firstName: string,
    lastName: string,
    designation: string
}

export interface AddUserInGroupPayload {
    groupName: string,
    userName: string
}