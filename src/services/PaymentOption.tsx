import { PaymentOptionRequest } from "../models/PaymentOption";
import { api } from "../utils/api";

export const addPaymentOption = async (paymentOption: PaymentOptionRequest) => {
    const response = await api().post('/payment_option', paymentOption);
    return response.data;
}
