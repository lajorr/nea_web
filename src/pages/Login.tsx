import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInputField from "../components/MyInputField";
import { useAuthContext } from "../provider/AuthContext";
import { authenticateUser, registerUser } from "../utils/auth";




const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true);


    const authContext = useAuthContext()
    const navigate = useNavigate();

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userName = formData.get("user_name") as string;
        const password = formData.get("password") as string;
        const password2 = formData.get("password2") as string;
        const fullName = formData.get("full_name") as string;

        console.log(fullName);

        if (isRegistered) {
            try {
                const user = authenticateUser(userName.trim(), password.trim());
                authContext.setContextUser(user);
                navigate("/");
            } catch (error: any) {
                alert(error.message);
                return;

            }
        } else {
            try {
                registerUser(userName.trim(), fullName.trim(), password.trim(), password2.trim());
            } catch (error: any) {
                alert(error.message);
                return
            }
        }
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
                    <MyInputField fieldName="Confirm Password" placeHolder="password" name="password2" type="password" />

                </div>

            </>}
            <button className="rounded-[4px] bg-blue-400 px-12 py-2 mt-6 text-white font-bold w-min">
                {isRegistered ? "Login" : "Register"}</button>
            <p className="text-[14px] text-center mt-4" >Already Have an account?<span className="font-[500] ml-2 underline cursor-pointer" onClick={() => {
                isRegistered ? setIsRegistered(false) : setIsRegistered(true)
            }} >{isRegistered ? "Login" : "Sign in"}</span></p>

        </form >
    )
}

export default Login