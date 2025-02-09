import { BillRequest } from "../models/Bill";
import { api } from "../utils/api";

export const getBillByCustomerId = async (id: number) => {
    try {
        const response = await api().get(`/bill/customer/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createBill = async (bill: BillRequest) => {
    try {
        const response = await api().post('/bill', bill);
        console.log("create bil", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}