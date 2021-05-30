import React from "react";
import styles from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: {
        backgroundImage : string
    }

}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.container}>
                <div className={styles.picture} style={props.style}>
                    <a className={styles.button}>See more</a>
                </div>
                <div className={styles.projectDescription}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.description}>{props.description}</p>
                </div>

            </div>
        </div>
    )
}