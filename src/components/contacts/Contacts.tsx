import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <Separator/>

            <div className={s.container}>
                <Title title={'Contacts'}/>
                    <div className={s.formContainer}>
                        <form className={s.form}>
                            <div className={s.inputContainer}>
                                <div className={s.input}>
                                    <input placeholder={'YOUR NAME'}/>
                                </div>
                                <div className={s.input}>
                                        <input placeholder={'YOUR EMAIL'}/>
                                </div>
                                <div className={s.input}>
                                    <input placeholder={'YOUR SUBJECT'}/>
                                </div>
                            </div>
                            <div  className={s.textarea}>
                                <textarea placeholder={'YOUR MESSAGE'}/>
                            </div>
                            <div className={s.buttonContainer}>
                                <button className={s.button} type={'submit'}>Send message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    )
}