import Link from "next/link";
import styles from "./DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "../moduls/LogoutButton";

const DashboardSidebar = async ({ children }) => {
  const session = await getServerSession(authOptions);
  //console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>Admin</p>
        <p>{session?.user.email}</p>
        <span></span>
        <div className={styles.details}>
          <Link href="/dashboard">Account</Link>
          <Link href="/dashboard/my-profiles">My Ads</Link>
          <Link href="/dashboard/add">Submit one</Link>
          <LogoutButton/>        
        </div> 
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidebar;
