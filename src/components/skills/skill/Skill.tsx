import React from "react";
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (
    {
        title,
        description,

        children
    }
) => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.container}>
                <div className={styles.icon}>{children}</div>
                <div className={styles.skillDescription}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    {/*<ul className={styles.description}>*/}
                    {/*    {description.map(item => <li>{item}</li>*/}
                    {/*    )}*/}
                    {/*</ul>*/}
                </div>
            </div>

        </div>
    )
}