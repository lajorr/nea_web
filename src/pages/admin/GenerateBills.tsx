import { useBillContext } from "../../provider/BillContext";

const GenerateBills = () => {

    const billCtx = useBillContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const customerId = formData.get("customer_id") as string;
        const issueDate = formData.get("issue_date") as string;
        const dueDate = formData.get("due_date") as string;

        const unitsConsumed = formData.get("units_consumed") as string;

        billCtx.generateBills(Number(customerId), issueDate, dueDate, unitsConsumed);

        e.currentTarget.reset();
    }

    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" action="">
                    <div className="flex justify-between items-center mb-4 ">
                        <h1 className="text-[24px] font-bold">Generate Bills</h1>
                        <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" type="submit">Submit</button>
                    </div>
                    <label>
                        Customer ID
                        <input type="number" placeholder="Customer id" name="customer_id" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    <label>
                        Issue Date
                        <input type="date" name="issue_date" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    <label>
                        Due Date
                        <input type="date" name="due_date" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    <label>
                        Units Consumed
                        <input type="number" placeholder="Units Consumed" name="units_consumed" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>

                </form>

            </div>
        </div>
    )
}

export default GenerateBills
