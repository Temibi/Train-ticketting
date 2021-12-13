import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <img src={Logo.src} alt="logo" />
        <Link href="/">HOME</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/prices">TICKET PRICE & SCHECULE</Link>
        <Link href="/policy">POLICY</Link>
      </div>
      <div className={styles.HeaderRight}>
        <Link href="/login">Login</Link>
        <Link href="/signup">SIGN UP</Link>
      </div>
    </header>
  );
};

export default Header;
