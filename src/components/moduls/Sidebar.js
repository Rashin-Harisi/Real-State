import { HiFilter } from "react-icons/hi";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { categories } from "@/constants/strings";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        Category
      </p>
      <div className={styles.list}>
        <Link href="/buy-residential">All</Link>
        {Object.keys(categories).map((category) => (
          <Link
            KEY={category}
            href={{ pathname: "/buy-residential", query: { category } }}
          >
            {categories[category]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
