/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

const infoCards = [
  {
    title: "🎓 教育背景",
    items: ["安徽财经大学 数字经济专业 研究生在读", "本科：电子商务"],
  },
  {
    title: "💼 实习经历",
    items: ["奇瑞品牌事业部 | 品牌策划实习生"],
  },
  {
    title: "🏆 项目经验",
    items: ["多个省级获奖项目（乡村IP运营、非遗校园孵化）", "研究生班级班长"],
  },
];

const positioning =
  "我不是纯技术出身，但我有数据分析能力、项目管理经验和AI工具应用实战。\n在AI比赛/项目中，我可以承担产品设计、数据分析、项目协调等角色，帮助团队把技术方案落地成可用产品。";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">About Me</p>
          <h2>关于我</h2>
          <p className="section-subtitle">
            以产品视角串联需求、数据与技术，让想法从概念走向可用方案。
          </p>
        </div>
        <div className="card-grid">
          {infoCards.map((card) => (
            <div className="card" key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="quote-card">
          <h3>个人定位</h3>
          <p>{positioning}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
