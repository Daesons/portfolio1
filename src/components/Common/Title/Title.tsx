import React from "react";
import styles from './Title.module.css'


type TitleType = {
    title : string
}

export const Title : React.FC<TitleType> = (
    {
        title
    }
) => {
    return <React.Fragment>
        <div className={styles.title}>
            <h3>{title}</h3>
        </div>
    </React.Fragment>
}