import DashboardCard from "../moduls/DashboardCard"
import styles from "./MyProfilesPage.module.css"

const MyProfilesPage = ({profiles}) => {
  return (
    <div>
        {profiles.length ?null : (
            <p className={styles.text}>There is no advertisement🙂</p>
        )}
        {profiles.map((profile)=>(
            <DashboardCard key={profile._id} data={JSON.parse(JSON.stringify(profile)) }/>
        ))}
    </div>
  )
}

export default MyProfilesPage