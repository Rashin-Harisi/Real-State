import { icons } from "@/constants/icons";
import styles from "./Card.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { separatedNumber } from "@/utils/seperateNumber";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const Card = ({ data: { _id, category, title, location, price } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{separatedNumber(price)} €</span>
      <Link href={`/buy-residential/${_id}`}>Info <BiRightArrowAlt/></Link>
    </div>
  );
};

export default Card;
