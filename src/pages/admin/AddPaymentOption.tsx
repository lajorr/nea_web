import { FormEvent } from "react";
import { usePaymentOptionContext } from "../../provider/PaymentOptionContext";

const AddPaymentOption = () => {

    const ctx = usePaymentOptionContext();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const paymentOption = formData.get("payment_option") as string;

        // Assume addPaymentOption is a function to handle adding the payment option
        ctx.addNewPaymentOption(paymentOption);
        alert("Payment Option added successfully");

        e.currentTarget.reset();
    };


    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex justify-between items-center mb-4 ">
                        <h1 className="text-[24px] font-bold">Add Payment Option</h1>
                        <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" >Add</button>
                    </div>
                    <label>
                        Payment Option
                        <input name="payment_option" type="text" placeholder="Payment Option" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                </form>

            </div>
        </div>
    )
}

export default AddPaymentOption