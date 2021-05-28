import React from "react";
import styles from './Main.module.scss'

export function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.inform}>
                    <span>Hello</span>
                    <h1>I am Vladik</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={styles.photo}/>
            </div>
        </div>
    )
}