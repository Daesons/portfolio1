import React from "react";
import styles from './Project.module.css'

type ProjectPropsType = {
    title:string
    discription:string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.picture}> </div>
            <h3>{props.title}</h3>
            <span>{props.discription}</span>
            <div><button>see more</button></div>
        </div>
    )
}