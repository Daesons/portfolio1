import React from "react";
import styles from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.container}>
                <div className={styles.picture}>
                    <button>See more</button>
                </div>
                <div className={styles.projectDescription}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.description}>{props.description}</p>
                </div>

            </div>
        </div>
    )
}