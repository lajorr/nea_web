import { createContext, ReactNode, useContext, useState } from "react";
import { createBill, getBillByCustomerId } from "../services/Bill";
import { Bill, BillRequest } from "../types/Bill";
import { User } from "../types/User";


type BillState = {
    userBills: Bill[]
    fetchUserBills: () => void
    generateBills: (customerId: number,
        issueDate: string,
        dueDate: string,
        unitsConsumed: string) => void
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

    return (
        <BillContext.Provider value={{
            userBills,
            fetchUserBills,
            generateBills
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

