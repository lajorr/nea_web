import { createContext, ReactNode, useContext, useState } from "react";
import { addBranch, getAllBranches } from "../services/Branch";
import { Branch } from "../types/Branch";

type BrandState = {
    addNewBranch: (brandName: string) => void,
    fetchBranches: () => void,
    branches: Branch[],
}


const BranchContext = createContext<BrandState | undefined>(undefined)


export const BranchProvider = ({ children }: { children: ReactNode }) => {
    const [branches, setBranches] = useState<Branch[]>([])

    const addNewBranch = async (brandName: string) => {
        await addBranch({
            name: brandName
        })
    }

    const fetchBranches = async () => {
        const allBranches = await getAllBranches()
        setBranches(allBranches)
    }

    return <BranchContext.Provider value={{ addNewBranch, fetchBranches, branches }}>
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