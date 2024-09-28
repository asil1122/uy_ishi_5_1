import React from "react";
import hero_img from "../../assets/hero_img.svg"
import style from "./hero.module.css";

export const Hero = () => {
    return (
        <>
            <section className={style.hero}>
                <div className={style.hero_block}>
                    <div className={style.hero_content}>
                        <h1 className={style.hero_title}>Bring everyone
                            together to build
                            better products.</h1>
                        <p className={style.hero_text}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                        <button className={style.hero_btn}>Get Started</button>
                    </div>
                    <div className={style.hero_img}>
                        <img src={hero_img} alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}