"use client"
import { separatedNumber } from '@/utils/seperateNumber'
import styles from './AdminCard.module.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const AdminCard = ({data}) => {
    const router = useRouter()
    const publishHandler=async()=>{
        const res= await fetch(`/api/profile/publish/${data._id}`,{method: "PATCH"})
        const result =await res.json();
        if (result.error){
            toast.error(result.error)
        }else{
            toast.success(result.message)
            router.refresh()
        }
    }
    const deleteHandler =async()=>{
        const res = await fetch(`/api/profile/deleteadmin/${data._id}`, {
            method: "DELETE",
          });
          const result = await res.json();
          if (result.error) {
            toast.error(result.error);
          } else {
            toast.success(result.message);
            router.refresh();
          }
    }
  return (
    <div className={styles.container}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={styles.properties}>
            <span>{data.location}</span>
            <span>{`${separatedNumber(data.price)} $`}</span>
        </div>
        <button onClick={publishHandler}>Publish</button>
        <button  className={styles.delete} onClick={deleteHandler}>Delete</button>
        <ToastContainer/>
    </div>
  )
}

export default AdminCard