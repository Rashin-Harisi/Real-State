import { FiCircle } from "react-icons/fi";
import styles from "./HomePage.module.css";
import { categories, cities, services } from "@/constants/strings";
import CategoryCard from "../moduls/CategoryCard";
import { FaCity } from "react-icons/fa";

const HomePage = () => {
  
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>A system for purchasing and renting property</h1>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <FiCircle />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((category)=>(
            <CategoryCard key={category} title={categories[category]} name={category}/>
        ))}
      </div>
      <div className={styles.city}>
        <h3>Popular cities</h3>
        <ul>
            {cities.map((city)=>(
                <li key={city}>
                    <FaCity/>
                    <span>{city}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
