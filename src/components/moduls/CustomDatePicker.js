import styles from './CustomDatePicker.module.css';
import DatePicker from "react-multi-date-picker"


const CustomDatePicker = ({profileData,setProfileData}) => {
  const changeHandler = (e)=>{
    const date=new Date(e)
    setProfileData({...profileData, constructionDate:date})    
  }
  return (
    <div className={styles.container}>
      <p>Date of Construction</p>
      <DatePicker value={profileData.constructionDate} onChange={changeHandler}/>
    </div>
  )
}

export default CustomDatePicker