import { UserType } from "../utils/enums";

export type User = {
    id: number;
    username: string;
    full_name: string;
    password: string;
    user_role: UserType;
    contact: string,
    address: string,
    branch_id: number,
    demand_type_id: number
}

export type UserRequest = Omit<User, 'id'>