
const AddPaymentOption = () => {
    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <div className="flex justify-between items-center mb-4 ">
                    <h1 className="text-[24px] font-bold">Add Payment Option</h1>
                    <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" >Add</button>
                </div>
                <form className="" action="">
                    <label>
                        Payment Option
                        <input type="text" placeholder="Payment Option" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                </form>

            </div>
        </div>
    )
}

export default AddPaymentOption