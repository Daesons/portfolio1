import React from "react";
import styles from './Nav.module.scss'

export function Nav() {
    return (
        <div className={styles.nav}>
            <a className={styles.title} href={''}>Main</a>
            <a className={styles.title} href={''}>Skills</a>
            <a className={styles.title} href={''}>Projects</a>
            <a className={styles.title} href={''}>Contacts</a>
        </div>
    )
}