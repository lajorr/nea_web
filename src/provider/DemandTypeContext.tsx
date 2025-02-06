import { createContext, ReactNode, useContext } from "react";
import { addDemandType } from "../services/DemandType";

interface DemandTypeState {
    addNewDemandType: (demandTypeName: string) => void;
}

const DemandTypeContext = createContext<DemandTypeState | undefined>(undefined);

export const DemandTypeProvider = ({ children }: { children: ReactNode }) => {

    const addNewDemandType = async (demandTypeName: string) => {
        await addDemandType({
            type: demandTypeName + "AMP"
        });
    }

    return (
        <DemandTypeContext.Provider value={{ addNewDemandType }}>
            {children}
        </DemandTypeContext.Provider>
    );
};

export const useDemandTypeContext = () => {
    const ctx = useContext(DemandTypeContext);
    if (ctx === undefined) {
        throw new Error("useDemandTypeContext must be used within a DemandTypeProvider");
    }
    return ctx;
}

