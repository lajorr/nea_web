import { FormEvent } from "react";
import { useBranchContext } from "../../provider/BranchContext";

const AddBranch = () => {

    const brandCtx = useBranchContext();


    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {



        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const branchName = formData.get("branch_name") as string;
        brandCtx.addNewBranch(branchName);
        alert("Branch added successfully");

        e.currentTarget.reset();
    }

    return (
        <div className=" w-full">
            <div className="max-w-[600px] mx-auto ">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex justify-between items-center mb-4 ">
                        <h1 className="text-[24px] font-bold">Add branch</h1>
                        <button className="bg-blue-300 w-min px-4 h-min py-1 rounded" >Add</button>
                    </div>
                    <label>
                        Branch Name
                        <input name="branch_name" type="text" placeholder="Branch Name" className="w-full border border-black/30 rounded-[4px] px-4 py-2" />
                    </label>
                </form>

            </div>
        </div>
    )
}

export default AddBranch