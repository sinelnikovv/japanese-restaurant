import React from "react";
import header_banner from "../../img/header_banner.jpg"
import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
  return <React.Fragment>
    <header className={styles.header}>
      <h1>Японська кухня</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={styles["main-image"]}>
      <img src={header_banner} alt="Блюда японської кухні" />
    </div>
  </React.Fragment>

}

export default Header;