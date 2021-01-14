import React from "react";
import styles from './Skill.module.css'

type SkillPropsType = {
    title: string
    discription: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.container} >
                <div className={styles.icon}></div>
                <h3 >
                    {props.title}
                </h3>
                <span className={styles.discription}>
                {props.discription}
            </span>
            </div>

        </div>
    )
}