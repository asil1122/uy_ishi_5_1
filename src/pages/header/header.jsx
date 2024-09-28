import React from "react";
import logo from "../../assets/header_logo.svg"
import style from "./header.module.css";

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.header_block}>
                    <img className={style.header_img} src={logo} alt="logo" />
                    <ul className={style.header_list}>
                        <li className={style.header_item}>
                            <a className={style.header_link} href="#">Pricing</a>
                        </li>
                        <li className={style.header_item}>
                            <a className={style.header_link} href="#">Product</a>
                        </li>
                        <li className={style.header_item}>
                            <a className={style.header_link} href="#">About Us</a>
                        </li>
                        <li className={style.header_item}>
                            <a className={style.header_link} href="#">Careers</a>
                        </li>
                        <li className={style.header_item}>
                            <a className={style.header_link} href="#">Community</a>
                        </li>
                    </ul>
                    <button className={style.header_btn}>Get Started</button>
                </div>
            </header>
        </>
    )
}