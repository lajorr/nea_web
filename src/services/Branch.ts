import { Branch, BranchRequest } from "../models/Branch";
import { api } from "../utils/api";

export const addBranch = async (branchName: BranchRequest) => {
    try {
        const response = await api().post("/branch", branchName);
        console.log(response.data);
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const getAllBranches = async () => {
    try {
        const response = await api().get<Branch[]>("/branch");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

