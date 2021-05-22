import React from 'react';
import {useSelector} from "react-redux";

export const Profile = () => {
    const name = useSelector((state) => state.profile.name);
    return (
        <>
            <h2>Страница профиля</h2>
            <div>Имя: {name}</div>
        </>
    );
}
