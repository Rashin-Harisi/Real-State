"use client";

import { useState } from "react";
import styles from "./SignupPage.module.css";
import { useRouter } from "next/navigation";
import Loader from "../moduls/Loader";
import Link from "next/link";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupHandler=async(e)=>{
    e.preventDefault()
    if(password !== rePassword){
        toast.error("Error in Confirmation password!")
        return;
    }
    setLoading(true)
    const res= await fetch ('api/auth/signup',{
        method:"POST",
        body: JSON.stringify({email,password}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json();
    setLoading(false)
    if(res.status === 201){
        router.push('/signin')
    }else{
        toast.error(data.error)
    }



  }
  return (
    <div className={styles.form}>
      <h4>Registration Form</h4>
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
        <label>Confirm Password:</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading?(<Loader/>) : (
            <button type='submit' onClick={signupHandler}>Register</button>
        )}
      </form>
      <p>Have an account?<Link href='/signin'>Sign in</Link></p>
      <ToastContainer/>
    </div>
  );
};

export default SignupPage;
