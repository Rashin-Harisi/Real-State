"use client";
import { useSession } from "next-auth/react";
import styles from "./Header.module.css";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/buy-residential">Advertisements</Link>
          </li>
        </ul>
      </div>
      {session.data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>Login</span>{" "}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
