import { useAuthContext } from "../provider/AuthContext";
import { UserType } from "../utils/enums";


const Home = () => {
  const authContext = useAuthContext();
  const user = authContext.user;

  return (

    <div className="w-full flex flex-col justify-center items-center " >
      <p className="text-2xl ">Welcome to NEA Bill Payment Portal</p>
      {!user && <p className=" italic " >You are not logged in</p>}
      {user &&
        <p className=" italic " >You are logged in as an {user.user_role === UserType.admin ? "admin" : "customer"}</p>
      }
    </div>
  )
}

export default Home