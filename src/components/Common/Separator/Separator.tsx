import React from "react";
import styles from './Separator.module.css'




export const Separator : React.FC = () => {
    return <React.Fragment>
        <hr className={styles.separator}/>
        </React.Fragment>
}