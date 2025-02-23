import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { Link } from "react-router-dom";

export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1>Private</h1>
        </div>
    );
};
