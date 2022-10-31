import css from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header >

    <div className={css.header}>
      <div></div>
      <div className={css.newsDiv}>
        <Link to="/">Home</Link>{" "}
      </div>
      <div className={css.category}>
        <Link to ='/Content2'>News</Link>
      </div>
    </div>
    </header>
  );
};

export default Header;
