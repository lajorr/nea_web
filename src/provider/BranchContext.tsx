import { createContext, ReactNode, useContext } from "react";
import { addBranch } from "../services/Branch";

type BrandState = {
    addNewBranch: (brandName: string) => void,
}


const BranchContext = createContext<BrandState | undefined>(undefined)


export const BranchProvider = ({ children }: { children: ReactNode }) => {

    const addNewBranch = async (brandName: string) => {
        await addBranch({
            name: brandName
        })
    }

    return <BranchContext.Provider value={{ addNewBranch }}>
        {children}
    </BranchContext.Provider>
}

export const useBranchContext = () => {
    const ctx = useContext(BranchContext);
    if (ctx === undefined) {
        throw new Error("useBranchContext must be used within a BranchContextProvider")
    }
    return ctx
}