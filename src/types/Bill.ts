export type Bill = {
    id: number,
    customer_id: number,
    issue_date: string,
    due_date: string,
    units_consumed: string,
    amount: number,
    status: string,
}

export type BillRequest = Omit<Bill, "id" | "amount" | "status">