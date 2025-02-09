import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInputField from "../components/MyInputField";
import { useAuthContext } from "../provider/AuthContext";
import { useBranchContext } from "../provider/BranchContext";
import { useDemandTypeContext } from "../provider/DemandTypeContext";

const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true);

    const authContext = useAuthContext()
    const branchContext = useBranchContext();
    const demandContext = useDemandTypeContext();

    const navigate = useNavigate();

    useEffect(() => {
        branchContext.fetchBranches();
        demandContext.fetchDemandTypes();
    }, [])

    const allBranches = branchContext.branches
    const allDemandTypes = demandContext.demandTypes


    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userName = formData.get("user_name") as string;
        const password = formData.get("password") as string;
        const fullName = formData.get("full_name") as string;
        const contact = formData.get("contact") as string;
        const address = formData.get("address") as string;
        const branchId = formData.get("branchId") as string;
        const demandTypeId = formData.get("demandTypeId") as string;

        if (isRegistered) {
            authContext.login(userName, password)
        } else {
            authContext.register(userName, password, fullName, contact, address, Number(branchId), Number(demandTypeId));
        }
        navigate("/");
    }

    return (
        <form onSubmit={handleLogin} className="p-4 shadow-lg rounded-[4px] w-min mx-auto flex flex-col items-center mt-20" >
            {isRegistered && <><h1 className="text-[28px] font-bold text-center mb-12">Login</h1>
                <div className="flex flex-col gap-4 items-center" >
                    <MyInputField fieldName="Username" placeHolder="John Doe" name="user_name" type="text" />
                    <MyInputField fieldName="Password" placeHolder="password" name="password" type="password" />
                </div>
            </>}

            {!isRegistered && <><h1 className="text-[28px] font-bold text-center mb-12">Register</h1>
                <div className="flex flex-col gap-4 items-center " >
                    <MyInputField fieldName="Username" placeHolder="John Doe" name="user_name" type="text" />
                    <MyInputField fieldName="Full name" placeHolder="John Doe" name="full_name" type="text" />
                    <MyInputField fieldName="Password" placeHolder="password" name="password" type="password" />
                    <MyInputField fieldName="Contact" placeHolder="981xxxxxxxx" name="contact" type="number" />
                    <MyInputField fieldName="Address" placeHolder="Nepal" name="address" type="text" />
                    <select name="branchId" defaultValue="none" className="text-[16px]  border border-black/30 rounded-[4px] px-4 py-2 w-[300px]">
                        <option value="none" disabled>Select Branch</option>
                        {allBranches.map(branch => (
                            <option key={branch.id} value={branch.id}>
                                {branch.name}
                            </option>
                        ))}
                    </select>
                    <select name="demandTypeId" defaultValue="none" className="text-[16px]  border border-black/30 rounded-[4px] px-4 py-2 w-[300px]">
                        <option value="none" disabled>Select Demand Type</option>
                        {allDemandTypes.map(demandType => (
                            <option key={demandType.id} value={demandType.id}>
                                {demandType.type}
                            </option>
                        ))}
                    </select>

                </div>

            </>}
            <button className="rounded-[4px] bg-blue-400 px-12 py-2 mt-6 text-white font-bold w-min">
                {isRegistered ? "Login" : "Register"}</button>
            <p className="text-[14px] text-center mt-4" >{isRegistered ? `Don't have an account?` : `Already Have an account?`}<span className="font-[500] ml-2 underline cursor-pointer" onClick={() => {
                isRegistered ? setIsRegistered(false) : setIsRegistered(true)
            }} >{isRegistered ? "Sign up" : "Log in"}</span></p>

        </form >
    )
}

export default Login