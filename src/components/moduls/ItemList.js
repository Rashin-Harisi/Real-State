import styles from './ItemList.module.css'

const ItemList = ({data,name}) => {
  return (
    <div className={styles.container}>
        {data.length ? (
            <ul>
                {data.map((i,index)=>(
                    <li key={index}>{i}</li>
                ))}
            </ul>
        ): (<p>No {name}</p>)}
    </div>
  )
}

export default ItemList