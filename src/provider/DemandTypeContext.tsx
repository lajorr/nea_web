import { createContext, ReactNode, useContext, useState } from "react";
import { DemandType } from "../models/DemandType";
import { addDemandType, getAllDemandTypes } from "../services/DemandType";

interface DemandTypeState {
    addNewDemandType: (demandTypeName: string) => void
    fetchDemandTypes: () => {}
    demandTypes: DemandType[]
}

const DemandTypeContext = createContext<DemandTypeState | undefined>(undefined);

export const DemandTypeProvider = ({ children }: { children: ReactNode }) => {
    const [demandTypes, setDemandTypes] = useState<DemandType[]>([]);

    const addNewDemandType = async (demandTypeName: string) => {
        await addDemandType({
            type: demandTypeName + "AMP"
        });
    }

    const fetchDemandTypes = async () => {
        const allDemandTypes = await getAllDemandTypes()
        setDemandTypes(allDemandTypes);
    }

    return (
        <DemandTypeContext.Provider value={{ addNewDemandType, fetchDemandTypes, demandTypes }}>
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

