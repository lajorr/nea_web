import { createContext, ReactNode, useContext } from "react";
import { addPaymentOption } from "../services/PaymentOption";


type PaymentOptionState = {
    addNewPaymentOption: (paymentOption: string) => void
}


export const PaymentOptionContext = createContext<PaymentOptionState | undefined>(undefined);

export const PaymentOptionProvider = ({ children }: { children: ReactNode }) => {

    const addNewPaymentOption = async (paymentOption: string) => {
        await addPaymentOption({ name: paymentOption })
    }

    return (
        <PaymentOptionContext.Provider value={{ addNewPaymentOption }}>
            {children}
        </PaymentOptionContext.Provider>
    );
};

export const usePaymentOptionContext = () => {
    const context = useContext(PaymentOptionContext);
    if (context === undefined) {
        throw new Error(
            "usePaymentOptionContext must be used within a PaymentOptionProvider"
        );
    }
    return context;
};
