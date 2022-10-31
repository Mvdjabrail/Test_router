import React from "react";
import img from "../../image/5.svg";
import css from "./content.module.css";

const Content = () => {
  return (
    <div className={css.divContent}>
      <div className={css.div1}>
        <div className={css.hotTopics}>Hot Topics</div>
        <div className={css.img1}>
          <img src={img} alt="Картинка" />
        </div>
      </div>
      <div className={css.text}>
        Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
        adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
        vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
        magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
        read more
      </div>
    </div>
  );
};

export default Content;