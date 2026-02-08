/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="nav-links">
        <a href="#home">首页</a>
        <a href="#about">关于我</a>
        <a href="#skills">核心能力</a>
        <a href="#teammates">寻找队友</a>
        <a href="#goals">比赛目标</a>
        <a href="#contact">联系方式</a>
      </nav>
    </header>
  );
};

export default Header;
