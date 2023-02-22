import React from 'react';
import ReactParallaxTilt from "react-parallax-tilt";
import {toast} from "react-toastify";
import {Api} from "../../api";
import { Router } from '@/router';
import {useRouter} from "next/router";

const UserBadge = ({user , setUser}) => {

    const router = useRouter();

    const logout = () => {
        const result = Api.LogoutUser(setUser);
        if (result.statusCode !== 200) {
            return toast.error(result.message, {
                icon: '🧙',
                theme: 'light',
            });
        }

        toast.success(result.message, {
            icon: '🧙',
            theme: 'light',
        });

        router.push(Router.getRoutes().HOME);
    };

    console.log(user)

    return (
        <div className={"position-badge"}>
        <ReactParallaxTilt style={{width:"fit-content"}} reset={true} tiltReverse={true} glareEnable={true}  glareReverse={false} glareColor={"#FFF9F0"} scale={1.2} transitionEasing={"cubic-bezier(.03,.98,.52,.99)"} glareBorderRadius={"20px"} tiltMaxAngleX={40}  tiltMaxAngleY={40}>
        <div className={"user-badge"}>
            <div className={"user-badge-container"}>
                <div className={"info"}>
                    {user ? <img src={"/images/" + user.house.name + ".png"}/> : ""}
                    {user ?<p className={"text-20 text-yellow text-ProzaLibre-SemiBold"}>{user.name}</p>: ""}
                </div>
                <div className={"btn-logout"}>
                    <button className={"btn-reset btn-red btn-little"} onClick={() => logout()}>Deconnexion</button>
                </div>
            </div>
        </div>
        </ReactParallaxTilt>
        </div>
    );
};

export default UserBadge;