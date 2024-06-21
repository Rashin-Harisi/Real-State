import styles from "./RadioList.module.css";

function RadioList({profileData,setProfileData}) {
    const {category}=profileData;
    const changeHandler=(e)=>{
        const {name,value}= e.target
        setProfileData({...profileData,[name]:value})
    }
  return (
    <div className={styles.container}>
      <p>Category</p>
      <div className={styles.main}>
        <div>
          <input
            type="radio"
            name="category"
            value="house"
            id="house"
            checked={category === "house"}
            onChange={changeHandler}
          />
          <label htmlFor="house">House</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
          <label htmlFor="apartment">Apartment</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
          <label htmlFor="store">Store</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
          <label htmlFor="office">Office</label>
        </div>
      </div>
    </div>
  );
}

export default RadioList;
