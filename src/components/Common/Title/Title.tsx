import React from "react";
import styles from './Title.module.scss'


type TitleType = {
    title : string
}

export const Title : React.FC<TitleType> = (
    {
        title
    }
) => {
    return <React.Fragment>
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </React.Fragment>
}