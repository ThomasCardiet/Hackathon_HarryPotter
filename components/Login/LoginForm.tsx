import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import React, { useEffect } from "react";
import { Waiting } from '../Waiting';
import { Api } from "@/api";
import { useRouter } from "next/router";
import { Router } from "@/router";


interface MyFormValues {
    username: string;
    password: string;
}



let SchemaLogin = yup.object().shape({
  username: yup.string().required("Le nom d'utilisateur est obligatoire pour ce connecter"),
    password: yup.string().required("Le mot de passe est obligatoire pour ce connecter"),
});

export default function LoginForm({setUser}){

    const router = useRouter();

    // REDIRECT IF LOGGED
    useEffect(() => {
      if(Api.isLoggedUser()) router.push(Router.getRoutes().CHOICE.slug)
    }, [])


    const onSubmit = (credentials: MyFormValues) => {
      Api.loginUser(credentials).then((data) => {
        if(data.status && data.status !== 200) {
          switch (data.message) {
            case "Internal server error":
              data.message = "Une erreur est survenue lors de la connexion";
              break;
          }
          return toast.error(data.message, {
            icon : "🧙",
            theme :"light"
          })
        }else {
        Api.storeUser(data);
        setUser(data.user);
        router.push(Router.getRoutes().CHOICE.slug)
        return toast.success("Connexion réussie", {
          icon : "🧙",
          theme :"light"
        })
        }
      });
    }


    const initialValues: MyFormValues = { username: '' , password : '' };
    return (<>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SchemaLogin}>
            <Form>
                <div className={"form-row"}>
                    <label className={"text-15 text-white text-ProzaLibre-Regular"}>Nom d&apos;utilisateur</label>
                    <Field type={"text"} name={"username"} placeholder={"TraXx"}/>
                    <ErrorMessage name={"username"} component={"p"} className={"text-error text-ProzaLibre-Regular"}/>
                </div>
                <div className={"form-row"}>
                    <label className={"text-15 text-white text-ProzaLibre-Regular"}>Mot de passe</label>
                    <Field type={"password"} name={"password"} placeholder={"Mot de passe"} />
                    <ErrorMessage name={"password"} component={"p"} className={"text-error text-ProzaLibre-Regular"}/>
                </div>
                <div className={"form-row-button"}>
                    <button type={"submit"} className={"btn-reset btn-yellow"}>Connexion</button>
                    <a href={"https://hp-leaderboard.netlify.app/signup/"} type={"submit"} className={"btn-reset btn-yellow"}>Inscription</a>
                </div>
            </Form>
        </Formik>
    </>
    )
}
