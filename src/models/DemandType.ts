export type DemandType = {
    id: number;
    type: string;
}

export type DemandTypeRequest = Omit<DemandType, 'id'>