import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return <footer>{ <p>© {year} NKÜ NOT DEFTERİ</p>}</footer>;
}

export default Footer;
