import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {DistanceWork} from "./components/distanceWork/DistanceWork";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
  return <div className={styles.app}>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <DistanceWork/>
    <Contacts/>
    <Footer/>
  </div>
}

export default App;
