import React from "react";
import css from "./content.module.css";
import img1 from "../../image/1.svg";
import img2 from "../../image/2.svg";
import img3 from "../../image/3.svg";
import img4 from "../../image/4.svg";

const Content2 = () => {
  return (
    <div className={css.divMain}>
      <div className={css.divImg}>
        <div className={css.img1}>
          <div className={css.text}>Бой на ножах</div>
          <img src={img1} alt="" />
          <div className={css.text1}>Бой или вооружённое столкновение представляет собой совокупность согласованных по цели, месту и времени ударов, огня и манёвра войск (сил) вооружённых сил. Бой является основной активной формой боевых действий войсковых единиц и единиц сил — военнослужащих, подразделений, частей (кораблей), соединений, в тактическом масштабе.</div>
        </div>
        <div className={css.img1}>
          <div className={css.text}>Бег</div>
          <img src={img2} alt="" />
          <div className={css.text1}>Бег — один из способов передвижения человека и животных; отличается наличием так называемой «фазы полёта» и осуществляется в результате сложной координированной деятельности скелетных мышц и конечностей</div>
        </div>
        <div className={css.img1}>
          <div className={css.text}>Плавание</div>
          <img src={img3} alt="" />
          <div className={css.text1}>Пла́вание — вид спорта или спортивная дисциплина, заключающаяся в преодолении вплавь за наименьшее время различных дистанций</div>
        </div>
        <div className={css.img1}>
          <div className={css.text}>Плавание на скорость</div>
          <img src={img4} alt="" />
          <div className={css.text1}>Скоростное плавание в ластах — спортивная дисциплина, заключающаяся в преодолении различных дистанций за наименьшее время вплавь с моноластой. Задача спортсмена заключается в преодолении дистанции по/под поверхностью воды с помощью мускульной силы и моноласты.</div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
