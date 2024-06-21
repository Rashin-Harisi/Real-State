"use client";
import styles from "./DashboardCard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import { useState } from "react";

const DashboardCard = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const editHAndler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHAndler}><span>Edit</span> <FiEdit /></button>
        <button onClick={deleteHandler}>
          {loading ? (
            <Loader color="#db0505" height="30" />
          ) : (
            <>
              <span>Delete</span><AiOutlineDelete /> 
            </>
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashboardCard;
