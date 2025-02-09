import { User, UserRequest } from "../types/User";
import { api } from "../utils/api";

export const loginWithUserNameAndPassword = async (username: string, password: string) => {
    try {
        const response = await api().post<User>('/user/login', { username, password });
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const registerUser = async (userData: UserRequest) => {

    try {
        const response = await api().post<User>('/user/register', userData);
        console.log("registered new userr", response.data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
} 