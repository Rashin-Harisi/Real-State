"use client";

import { useState } from "react";
import styles from "./SignupPage.module.css";
import { useRouter } from "next/navigation";
import Loader from "../moduls/Loader";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false)
    if(res.error){
        toast.error(res.error)
    }else {
        router.push('/')
    }
  };

  return (
    <div className={styles.form}>
      <h4>Signin Form</h4>
      <form>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signinHandler}>
            Signin
          </button>
        )}
      </form>
      <p>
        Have not any account?<Link href="/signup">Signup</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default SigninPage;
