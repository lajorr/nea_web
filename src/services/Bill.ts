import { Bill, BillRequest } from "../types/Bill";
import { api } from "../utils/api";

export const getBillByCustomerId = async (id: number) => {
    try {
        const response = await api().get<Bill[]>(`/bill/customer/${id}`);
        console.log("service ",response.data); 
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