import React from "react";
import styles from './Main.module.scss'
import Photo from '../../assets/123123.jpg'
import Particles from "react-particles-js"
import {Fade, Slide} from "react-awesome-reveal";


const photo = {
    backgroundImage: `url(${Photo})`
}

const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}


export function Main() {
    return (
        <div className={styles.mainBlock} id={'Main'}>

            <Particles className={styles.particles} params={particlesOptions}/>
            <Slide direction={"right"}>
                <div className={styles.container}>
                    <div className={styles.inform}>
                        <div>Hi there!</div>
                        <h1 style={{margin: 0}}>I am Vladislav Yarmaliuk</h1>
                        <p style={{margin: 0}}>
                            <span>Gangster</span> Front-end Developer</p>
                    </div>
                    <div className={styles.photo} style={photo}/>

                </div>
            </Slide>
        </div>
    )
}