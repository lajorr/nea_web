import { FormEvent } from "react";
import { useDemandTypeContext } from "../../provider/DemandTypeContext";

const AddDemandType = () => {

    const demandCtx = useDemandTypeContext();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const demandType = formData.get("demand_type") as string;

        demandCtx.addNewDemandType(demandType);
        alert("Demand Type added successfully");

        e.currentTarget.reset()
    }

    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex justify-between items-center mb-4 ">
                        <h1 className="text-[24px] font-bold">Add Demand Type</h1>
                        <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" >Add</button>
                    </div>
                    <label>
                        Demand Type
                        <input name="demand_type" type="text" placeholder="Demand Type" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                </form>

            </div>
        </div>
    )
}

export default AddDemandType