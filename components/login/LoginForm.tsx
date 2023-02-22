import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import React from "react";
import {User} from "@/model/UserModel";


interface MyFormValues {
    username: string;
    password: string;
}



let SchemaLogin = yup.object().shape({
    username: yup.string().required("Le nom d'utilisateur est obligatoire pour ce connecter"),
    password: yup.string().required("Le mot de passe est obligatoire pour ce connecter"),
});

interface LoginFormType {
    users: User[];
}

export default function LoginForm({users}: LoginFormType ){
    const onSubmit = (values: any) =>{
       toast.error("Une erreur est survenue lors de la connexion", {
           icon : "🧙",
           theme :"light"
       })
    }

    const initialValues: MyFormValues = { username:'',password : '' };
    return (<>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SchemaLogin}>
            <Form>
                <div className={"form-row"}>
                    <label className={"text-15 text-white text-ProzaLibre-Regular"}>Nom d'utilisateur</label>
                    <Field type={"text"} name={"username"} placeholder={"Axel"}/>
                    <ErrorMessage name={"username"} component={"p"} className={"text-error text-ProzaLibre-Regular"}/>
                </div>
                <div className={"form-row"}>
                    <label className={"text-15 text-white text-ProzaLibre-Regular"}>Mot de passe</label>
                    <Field type={"password"} name={"password"} placeholder={"Mot de passe"} />
                    <ErrorMessage name={"password"} component={"p"} className={"text-error text-ProzaLibre-Regular"}/>
                </div>
                <div className={"form-row-button"}>
                    <button type={"submit"} className={"btn-reset btn-yellow"}>Connexion</button>
                    <a href={"#"} type={"submit"} className={"btn-reset btn-yellow"}>Inscription</a>
                </div>
            </Form>
        </Formik>
    </>
    )
}
