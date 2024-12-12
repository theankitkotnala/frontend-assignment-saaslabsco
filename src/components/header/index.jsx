import React from "react";
import "./style.css";
import saasLogoImg from "./../../assets/images/saasLabs_logo.svg";

const Header = () => {
    return <header className="cm-header">
        <img src={saasLogoImg} alt="logo" />
    </header>;
};

export default Header;