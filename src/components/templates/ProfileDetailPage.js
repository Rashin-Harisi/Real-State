import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import styles from "./ProfileDetailPage.module.css";
import Title from "../moduls/Title";
import ItemList from "../moduls/ItemList";
import { AiOutlinePhone } from "react-icons/ai";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import { separatedNumber } from "@/utils/seperateNumber";
import { BiCalendarCheck } from "react-icons/bi";
import ShareButton from "../moduls/ShareButton";

const ProfileDetailPage = ({ data }) => {
  const {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  } = data;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>Description</Title>
        <p>{description}</p>
        <Title>Amenities</Title>
        <ItemList name="amenity" data={amenities} />
        <Title>Rules</Title>
        <ItemList name="rule" data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>Real Sate {realState}</p>
          <span>
            <AiOutlinePhone />
            {phone}
          </span>
        </div>
        <ShareButton/>
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{separatedNumber(price)} $</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailPage;
