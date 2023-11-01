import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao(props){
    return (
        <div className={styles.subdivisao} style={{
            backgroundColor: props.preto ? "#000" : "#fff"
        }}></div>
    )
}