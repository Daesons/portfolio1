import React from "react";
import styles from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.container}>
                <div className={styles.icon}/>
                <div className={styles.skillDescription}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>

        </div>
    )
}