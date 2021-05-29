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
                <div className={s.wrapper}>
                    <div className={s.description}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Aliquam architecto dolorem ducimus
                        earum laboriosam laborum nemo optio ratione sequi voluptas? A,
                        cupiditate dignissimos dolor enim maxime reprehenderit sint tempora voluptate.
                    </div>
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
                            <div>
                                <button type={'submit'}> kek</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}