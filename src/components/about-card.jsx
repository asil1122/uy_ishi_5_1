import React from "react";
import style from  "./about-card.module.css"

export const AboutCard = ({ num, title, text }) => {
  return (
    <div className={style.block}>
      <span className={style.num}>{num}</span>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
};
