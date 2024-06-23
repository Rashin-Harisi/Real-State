"use client";

import styles from "./AddProfilePage.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TextInput from "../moduls/TextInput";
import RadioList from "../moduls/RadioList";
import TextList from "../moduls/TextList";
import CustomDatePicker from "../moduls/CustomDatePicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../moduls/Loader";

const AddProfilePage = ({ data }) => {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      setProfileData({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      });
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data ? "Edit Advertisement" : "Submit Advertisement"}</h3>
      <TextInput
        title="Title"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="Description"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="Location"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="Phone"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="Price-Euro"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="Real State"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="Amenities"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="Rules"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          Edit
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          Submit
        </button>
      )}
    </div>
  );
};

export default AddProfilePage;
