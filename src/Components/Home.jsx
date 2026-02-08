/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
const imageAltText = "Down arrow icon";

const Home = ({ name, title }) => {
  const [cnName, ...enParts] = name.split(" ");
  const enName = enParts.join(" ");
  return (
    <section id="home" className="hero min-height">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow">Personal Blog</p>
          <h1>
            {cnName}
            {enName && <span>{enName}</span>}
          </h1>
          <h2>{title}</h2>
          <p className="hero-quote">用产品思维连接技术与用户，让AI落地成可用方案</p>
          <p className="hero-intro">
            我们太习惯「计算」了。算 GPA，算保研率，算实习含金量，算投入产出比...
            我们把大学过成了一张严丝合缝的 Excel 表，每一步都在求「最优解」。
            但人生不是算出来的，是造出来的。把你扔进一个全是代码、咖啡甚至有点疯狂的周末，
            抛开那些「是否有用」的顾虑，你真正想做的，到底是什么？很厉害，也很好听。
          </p>
          <div className="cta-group">
            <a className="btn primary" href="#contact">
              📧 联系我
            </a>
            <a className="btn ghost" href="/resume.pdf" download>
              📄 查看简历
            </a>
            <a className="btn accent" href="#contact">
              🤝 组队合作
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="avatar" aria-hidden="true" />
          <div className="hero-meta">
            <p className="meta-title">数字经济研究生</p>
            <p className="meta-sub">产品设计 · 数据分析 · 项目协调</p>
            <div className="meta-tags">
              <span>AI应用</span>
              <span>团队协作</span>
              <span>执行力</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <img src={arrowSvg} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
