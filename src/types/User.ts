import { UserType } from "../utils/enums";

export type User = {
    id: string;
    username: string;
    full_name: string;
    password: string;
    type?: UserType;
    contact: string,
    address: string,
    branch_id: number,
    demand_type_id: number
}

export type UserRequest = Omit<User, 'id'>