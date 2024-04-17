import Profile from "@/components/profile/Profile";
import BusProfile from "@/components/profile/bus-Profile";
import { cookies } from "next/headers";


const Page = () => {
  const Role = cookies().get('role');
  return (
    <>
    {Role?.value == 'user'? <Profile/>:<BusProfile/>}
    </>
  );
};

export default Page;
