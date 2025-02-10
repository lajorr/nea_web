export type Rate = {
    id: string,
    demand_type_id: number,
    rate_per_unit: number
}

export type RateRequest = Omit<Rate, 'id'>