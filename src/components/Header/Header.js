import React from "react";
import "./Header.scss";
import headerLogo from "./../../images/Pictures/header_logo.png";
import {Filter} from "./Filter/Filter";
import {Typography} from "@mui/material";

export function Header(props) {
  const {setSearchText, setSearchAuthor, setSearchTags} = props;

  //------------------------------------------------------RETURN-------------------------------------------//

  return <header className="header">
    <div className="header__line">
      <a href="#">
        <img
          className="header__photo"
          src={headerLogo}
          alt="header"
        />
      </a>
      <a href="#" className="header__title">
        <Typography variant="h2" component="h2">
          Breaking News
        </Typography>
        </a>

    </div>

    <Filter setSearchText={setSearchText} setSearchAuthor={setSearchAuthor} setSearchTags={setSearchTags}/>

  </header>
}