import React from "react";
import s from './SingIn.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    let login = '/Users';

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="text" placeholder='Имя' component={'input'}/>
            <Field name="mail" placeholder='Почта' component={'input'}/>
            <button formAction={login}>Вход</button>
        </form>);
};

const ReduxForm = reduxForm({form: 'contact'})(LoginForm);

export const SingIn = (props) => {

    const onSubmit =(formData)=>{
        console.log(FormData)
    }

    return (
        <div className={s.container}>
            <h1>Добро пожаловать!</h1>
            <h4>Пожалуйста, авторизуйтесь</h4>
            <ReduxForm onSubmit={ onSubmit}/>
        </div>
    )
};