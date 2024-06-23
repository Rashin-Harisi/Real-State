import AdminCard from "../moduls/AdminCard";
import styles from "./AddProfilePage.module.css";

const AdminPage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>There is no advertisement</p>
      )}
      {profiles.map((profile)=>(
        <AdminCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>
      ))}
    </div>
  );
};

export default AdminPage;
