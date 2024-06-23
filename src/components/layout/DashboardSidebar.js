import Link from "next/link";
import styles from "./DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "../moduls/LogoutButton";

const DashboardSidebar = async ({ email,role,children }) => {
  
  //console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p className={styles.admin}>{role === "ADMIN" ? "Admin" : null}</p>
        <p>{email}</p>
        <span></span>
        <div className={styles.details}>
          <Link href="/dashboard">Account</Link>
          <Link href="/dashboard/my-profiles">My Ads</Link>
          <Link href="/dashboard/add">Submit one</Link>
          {role === "ADMIN"?(<Link href="/admin">Need Confirm</Link>) :null}
          <LogoutButton/>        
        </div> 
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidebar;
