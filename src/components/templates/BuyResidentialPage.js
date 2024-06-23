import Card from "../moduls/Card";
import Sidebar from "../moduls/Sidebar";
import styles from "./BuyResidentialPage.module.css";

const BuyResidentialPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>There is no advertisement.</p>
        )}
        {data.map((profile)=>(
            <Card key={profile._id} data={profile}/> 
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
