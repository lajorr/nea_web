
const GenerateBills = () => {
    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <div className="flex justify-between items-center mb-4 ">
                    <h1 className="text-[24px] font-bold">Generate Bills</h1>
                    <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" >Submit</button>
                </div>
                <form className="flex flex-col gap-5" action="">
                    <label>
                        Customer ID
                        <input type="number" placeholder="Customer id" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    <label>
                        Issue Date
                        <input type="date" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    <label>
                        Due Date
                        <input type="date" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    <label>
                        Current Reading
                        <input type="number" placeholder="Current Reading" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                    
                </form>

            </div>
        </div>
    )
}

export default GenerateBills