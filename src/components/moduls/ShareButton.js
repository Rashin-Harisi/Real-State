"use client";
import { useEffect, useState } from "react";
import styles from "./ShareButton.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";

const ShareButton = () => {
    const [url,setUrl] = useState("")
    useEffect(()=>{
        setUrl(window.location.href)
    },[])

  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>Share</button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
