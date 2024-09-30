import React from "react";
import style from "./comment.module.css";
import img from "../../assets/comment_img.svg"
import { CommentCard } from "../../components/comment/comment-card";

export const Comment = () => {
    return (
        <>
            <section className={style.comment}>
                <div className={style.block}>
                    <h2 className={style.title}>What they’ve said</h2>
                    <div className={style.block_comment}>
                        <div>
                        <CommentCard 
                            img={img}
                            title = {"Ali Bravo"}
                            des = {`“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`}
                        />
                        </div>
                        <div>
                        <CommentCard 
                            img={img}
                            title = {"Ali Bravo"}
                            des = {`“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`}
                        />
                        </div>
                    </div>
                    <button className={style.btn}>Get Started</button>
                </div>
            </section>
        </>
    )
}
