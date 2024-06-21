import styles from './DashboardPage.module.css';

const DashboardPage = ({createdAt}) => {
  return (
    <div className={styles.container}>
        <h3>Hi🖐 </h3>
        <p>Submit you advertising to be seen by thousand people.</p>
        <div className={styles.createdAt}>
            <p>Date of joining: </p>
            <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
    </div>
  )
}

export default DashboardPage