import React from "react";
import style from  "./comment-card.module.css"

export const CommentCard = ({ img , title, des} ) => {
    return (
        <div className={style.block}>
            <div className={style.img_block}>
                <img src={img} alt="img" />
            </div>  
            <h2 className={style.title}>{title}</h2>
            <p className={style.des}>{des}</p>
        </div>
    )
}
