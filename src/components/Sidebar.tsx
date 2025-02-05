import { useNavigate } from "react-router-dom";
import { adminFeatures, customerFeatures } from "../constants";
import { useAuthContext } from "../provider/AuthContext";
import { UserType } from "../utils/enums";
import FeatureTile from "./FeatureTile";

const Sidebar = () => {

    const authContext = useAuthContext();
    const user = authContext.user;
    const navigate = useNavigate()

    const features = user?.type === UserType.admin ? adminFeatures : customerFeatures


    return (
        <>
            {authContext.isAuthenticated &&
                < div className="border border-black/50 rounded-[4px] px-4 py-6 flex flex-col gap-4 h-min " >
                    {
                        features.map((f) => (
                            <FeatureTile key={f.id} {...f} />
                        ))
                    }
                    {
                        user &&
                        <button className="mt-6 text-left underline cursor-pointer" onClick={
                            () => {
                                navigate('/')
                                authContext?.logoutUser()
                            }
                        }>Logout</button>

                    }
                </ div>
            }
        </>
    )
}

export default Sidebar