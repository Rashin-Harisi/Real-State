import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>A service for renting and buying property</h3>
        <p>
          Our real estate website offers a comprehensive platform for buying,
          selling, and renting properties. With advanced search filters,
          detailed listings, and virtual tours, we provide users with a seamless
          and efficient experience. Whether you are a first-time homebuyer, an
          investor, or looking for your next rental, our website connects you
          with the best properties in your desired area.
        </p>
      </div>
      <div>
        <ul className={styles.list}>
          <li>Legitimate price</li>
          <li>Quick accessibility</li>
          <li>Expert consultant </li>
          <li>Legitimate contract</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
