import { DemandTypeRequest } from "../models/DemandType";
import { api } from "../utils/api";

export const addDemandType = async (demandType: DemandTypeRequest) => {
    try {
        const response = await api().post("/demand_type", demandType);
        console.log(response.data)
    } catch (error) {
        console.error(error);
        throw error;
    }
}