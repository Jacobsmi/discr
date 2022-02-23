import { SignupFormData } from "../models/user";

const postCreateUser = async (data: SignupFormData) =>{
    delete data.confirm;
    const result = await fetch("http://localhost:5000/user",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...data
        })
    });
    return result;
}

export default postCreateUser;