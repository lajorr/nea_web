import { User } from "../provider/AuthContext";
import { UserType } from "./enums";

const userList: User[] = [
    { userId: '1', userName: "admin", fullName: "John", password: "adminadmin", type: UserType.admin },
    { userId: '2', userName: "user", fullName: "Doe", password: "userPass", type: UserType.customer },
]


export const authenticateUser = (userName: string, password: string): User => {
    const user = userList.find(user => user.userName === userName && user.password === password);
    if (user) {
        return user
    } else {
        throw Error("Invalid username or password")
    }
}


export const registerUser = (userName: string, fullName: string, password: string, password2: string) => {
    console.log(fullName);

    if (password === password2) {
        userList.push({ userId: (userList.length + 1).toString(), userName, fullName, password, type: UserType.customer });
        return true
    } else {
        throw Error("Passwords do not match")
    }
}
