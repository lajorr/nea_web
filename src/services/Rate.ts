import { RateRequest } from "../types/Rate";
import { api } from "../utils/api";

export const addRate = async (rate: RateRequest) => {
    try {
        const response = await api().post("/rate", rate);
        console.log(response.data);
    } catch (error) {
        console.error(error);
        throw error
    }
}