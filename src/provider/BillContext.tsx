import { createContext, ReactNode, useContext, useState } from "react";
import { createBill, getBillByCustomerId, payAndUpdateBill } from "../services/Bill";
import { Bill, BillRequest } from "../types/Bill";
import { User } from "../types/User";


type BillState = {
    userBills: Bill[]
    fetchUserBills: () => void
    generateBills: (customerId: number,
        issueDate: string,
        dueDate: string,
        unitsConsumed: string) => void
    getRedirectUrlForPayment: (billId: number, amount: number) => Promise<string>
};


const BillContext = createContext<BillState | undefined>(undefined);

export const BillProvider = ({ children }: { children: ReactNode }) => {
    const [userBills, setUserBills] = useState<Bill[]>([]);

    const fetchUserBills = async () => {
        const localUser = localStorage.getItem('user')
        if (localUser) {
            const user = JSON.parse(localUser) as User;
            const bills = await getBillByCustomerId(user.id);
            setUserBills(bills);
        }
    };

    const generateBills = async (
        customerId: number,
        issueDate: string,
        dueDate: string,
        unitsConsumed: string,
    ) => {
        const newBill: BillRequest = {
            customer_id: customerId,
            issue_date: issueDate,
            due_date: dueDate,
            units_consumed: unitsConsumed,
        }
        await createBill(newBill);
    }

    const getRedirectUrlForPayment = async (billId: number, amount: number) => {
        const responseData = await payAndUpdateBill(amount, billId);
        console.log("response data: ", responseData)
        return responseData.url as string
    }

    return (
        <BillContext.Provider value={{
            userBills,
            fetchUserBills,
            generateBills,
            getRedirectUrlForPayment
        }}>
            {children}
        </BillContext.Provider>
    );
};

export const useBillContext = () => {
    const ctx = useContext(BillContext);
    if (ctx === undefined) {
        throw new Error("useBillContext must be used within a BillProvider");
    }
    return ctx;
};

