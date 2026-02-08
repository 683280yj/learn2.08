/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    phone,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <footer id="contact" className="contact" style={{ backgroundColor: primaryColor }}>
      <div className="section-inner">
        <div className="section-header light">
          <p className="eyebrow">Contact</p>
          <h2>📮 联系我</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>保持联系</h3>
            <p>
              📧 邮箱：{email}
              <br />
              📱 手机：{phone}
            </p>
            <div className="contact-list">
              <p>💬 欢迎联系我讨论：</p>
              <ul>
                <li>AI比赛组队合作</li>
                <li>产品设计咨询</li>
                <li>项目管理交流</li>
              </ul>
            </div>
            <div className="social-row">
              {email && (
                <a href={`mailto:${email}`} aria-label="Email">
                  <img src={envelopeIcon} alt="email" className="socialIcon" />
                </a>
              )}
              {devDotTo && (
                <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
                  <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
                </a>
              )}
              {gitHub && (
                <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
                  <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
                </a>
              )}
              {instagram && (
                <a
                  href={`https://www.instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" className="socialIcon" />
                </a>
              )}
              {linkedIn && (
                <a
                  href={`https://www.linkedin.com/in/${linkedIn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
                </a>
              )}
              {medium && (
                <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
                  <img src={mediumIcon} alt="Medium" className="socialIcon" />
                </a>
              )}
              {twitter && (
                <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" className="socialIcon" />
                </a>
              )}
              {youTube && (
                <a
                  href={`https://www.youtube.com/c/${youTube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
                </a>
              )}
            </div>
          </div>
          <div className="contact-card">
            <h3>组队合作表单</h3>
            <form className="contact-form" action={`mailto:${email}`} method="post" encType="text/plain">
              <label htmlFor="name">姓名</label>
              <input id="name" name="name" type="text" placeholder="你的称呼" />
              <label htmlFor="contact">联系方式</label>
              <input id="contact" name="contact" type="text" placeholder="邮箱/微信/手机号" />
              <label htmlFor="message">想做的方向</label>
              <textarea id="message" name="message" rows="4" placeholder="简单描述你的想法" />
              <button type="submit" className="btn accent full">
                🤝 组队合作
              </button>
            </form>
            <div className="qr-placeholder">
              <div className="qr-box">微信二维码</div>
              <p className="small">可替换为你的微信二维码图片</p>
            </div>
          </div>
        </div>
        <p className="small footer-note">Created by {name}</p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,

};

export default Footer;
