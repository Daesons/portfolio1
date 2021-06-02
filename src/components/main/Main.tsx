import React from "react";
import styles from './Main.module.scss'
import Photo from '../../assets/123123.jpg'



const photo = {
    backgroundImage : `url(${Photo})`
}

export function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.inform}>
                    <div>Hi there!</div>
                    <h1 style={{margin: 0}}>I am Vladislav Yarmaliuk</h1>
                    <p style={{margin: 0}}>
                        <span>Gangster</span> Front-end Developer</p>
                </div>
                <div className={styles.photo} style={photo}/>
            </div>
        </div>
    )
}