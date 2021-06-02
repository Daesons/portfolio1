import React from "react";
import styles from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    ghPagesUrl: string
    style: {
        backgroundImage : string
    }

}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.container}>
                <div className={styles.picture} style={props.style}>
                    <a className={styles.href} href={props.ghPagesUrl}/>
                </div>


                <div className={styles.projectDescription}>
                    <h3 className={styles.title}>
                        <a href={props.ghPagesUrl}>{props.title}</a>
                    </h3>
                    <p className={styles.description}>{props.description}</p>
                </div>

            </div>
        </div>
    )
}