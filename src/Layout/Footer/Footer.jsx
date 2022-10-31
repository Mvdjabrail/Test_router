import React from "react";
import { Link } from "react-router-dom";
import css from "./footer.module.css";
import img1 from "../../image/icon1.svg";
import img2 from "../../image/icon2.svg";

const Footer = () => {
  return (
    <footer>
    <div className={css.footer}>
      <div className={css.divImg}>
        <a href="https://stavropol.hh.ru/employer/9054726?hhtmFrom=vacancy">
          <img src={img1} alt="" />
        </a>
        <a href="https://stavropol.hh.ru/employer/9054726?hhtmFrom=vacancy">
          {" "}
          <img src={img2} alt="" />
        </a>
      </div>
      <div className={css.News}>
        {" "}
        <Link to="/">Home</Link>{" "}
      </div>
      <div className={css.data}>31.10.2022</div>
    </div>
    </footer>
  );
};

export default Footer;
