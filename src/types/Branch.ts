export type Branch = {
    id: number,
    name: string,
}

export type BranchRequest = Omit<Branch, 'id'>