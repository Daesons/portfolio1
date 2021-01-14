import React from "react";
import styles from './Project.module.css'

type ProjectPropsType = {
    title:string
    discription:string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.container}>
            <div className={styles.picture}>
                <button>See more</button>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <b>{props.discription}</b>
            </div>
        </div>
    )
}