import React from "react";
import style from "./about.module.css";
import { AboutCard } from "../../components/about-card";

export const About = () => {
    return (
        <>
            <section className={style.about}>
                <div className={style.about_block}>
                    <div className={style.about_left_block}>
                        <h2 className={style.about_left_title}>What’s different about Manage?</h2>
                        <p className={style.about_left_text}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
                    </div>
                    <div className={style.about_right_block}>
                        <div className={style.about_title_block}>
                            <AboutCard
                                num={"01"}
                                title={"Track company-wide progress"}
                                text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
                            />
                            <AboutCard
                                num={"02"}
                                title={"Track company-wide progress"}
                                text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
                            />
                            <AboutCard
                                num={"03"}
                                title={"Track company-wide progress"}
                                text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}