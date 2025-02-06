import { createContext } from "react";

type BrandState = {
    addnewBranch: () => void,
}


const BranchContext = createContext<BrandState | undefined>(undefined)