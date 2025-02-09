import { createContext, ReactNode, useContext } from "react";
import { addRate } from "../services/Rate";


type RateState = {
    addNewRate: (demandTypeId: number, rate: number) => {}
}

export const RateContext = createContext<RateState | undefined>(undefined);

export const RateProvider = ({ children }: { children: ReactNode }) => {


    const addNewRate = async (demandTypeId: number, rate: number) => {
        await addRate({
            demand_type_id: demandTypeId,
            rate_per_unit: rate
        });
    }


    return (
        <RateContext.Provider value={{ addNewRate }}>
            {children}
        </RateContext.Provider>
    );
};

export const useRateContext = () => {
    const context = useContext(RateContext);
    if (context === undefined) {
        throw new Error(
            "useRateContext must be used within a RateProvider"
        );
    }
    return context;
};
