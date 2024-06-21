import styles from "./TextList.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";

const TextList = ({ title, type, profileData, setProfileData }) => {
  const changeHandler = (e,index)=>{
    const {value} = e.target;
    const list= [...profileData[type]];
    list[index]= value;
    setProfileData({...profileData, [type]:list})
  }
  const addHandler= ()=>{
    setProfileData({...profileData, [type]:[...profileData[type],  ""]})
  }

  const deleteHandler=(index)=>{
    const list =[...profileData[type]]
    list.splice(index,1);
    setProfileData({...profileData,[type]:list})
  }
    return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i,index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={()=>deleteHandler(index)}>
            <span>Delete</span>
            <AiOutlineDelete/>
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        Add 
        <MdOutlineLibraryAdd/>
      </button>
    </div>
  );
};

export default TextList;
