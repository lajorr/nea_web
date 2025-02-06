export type PaymentOption = {
    id: number,
    name: string,
}

export type PaymentOptionRequest = Omit<PaymentOption, 'id'>