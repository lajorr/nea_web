import { FormEvent, useEffect } from "react";
import { useDemandTypeContext } from "../../provider/DemandTypeContext";
import { useRateContext } from "../../provider/RateContext";

const AddRate = () => {

    const rateCtx = useRateContext()
    const demandCtx = useDemandTypeContext();

    useEffect(() => {
        demandCtx.fetchDemandTypes();
    }, [])
    let allDemandTypes = demandCtx.demandTypes

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const demandTypeId = formData.get("demand_type");
        const rate = formData.get("rate");

        if (!demandTypeId && !rate) {
            return;
        }
        rateCtx.addNewRate(Number(demandTypeId), Number(rate));

        e.currentTarget.reset();
    }


    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                    <div className="flex justify-between items-center mb-4 ">
                        <h1 className="text-[24px] font-bold">Add Rate</h1>
                        <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" >Add</button>
                    </div>
                    <label>
                        Select Demand Type
                        <select name="demand_type" defaultValue={"none"} className="w-full border border-black/30 rounded-[4px] px-4 py-2">
                            <option value="none" disabled>
                                Select Demand Type
                            </option>
                            {allDemandTypes.map((demandType) => {
                                return <option key={demandType.id} value={demandType.id}>
                                    {demandType.type}
                                </option>
                            })}
                        </select>
                    </label>
                    <label>
                        Rate Per Unit
                        <input name="rate" type="number" placeholder="Rate" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                </form>

            </div>
        </div>
    )
}

export default AddRate
