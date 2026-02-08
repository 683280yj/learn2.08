/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

const skills = [
  {
    title: "🎨 产品思维 + 用户洞察",
    items: [
      "做过多个省级获奖项目（乡村IP运营、非遗校园孵化）",
      "擅长从用户需求出发设计解决方案",
      "能把技术方案转化为用户友好的产品",
    ],
  },
  {
    title: "📊 项目管理 + 团队协调",
    items: [
      "研究生班级班长，有团队管理经验",
      "奇瑞品牌事业部实习，跨部门协调、进度把控",
      "能确保项目按时交付，不掉链子",
    ],
  },
  {
    title: "🤖 数据分析 + AI工具应用",
    items: [
      "熟悉数据分析工具和方法",
      "实际使用过ChatGPT、Midjourney等AI工具",
      "对AI+游戏、AI+营销等应用场景有深入思考",
    ],
  },
  {
    title: "🎤 内容策划 + 展示能力",
    items: [
      "做过品牌营销和内容策划",
      "英语良好，能做商务沟通和讲解",
      "能把技术方案包装成打动评委的展示内容",
    ],
  },
];

const teammateNeeds = [
  "✅ 算法/工程大神：能搞定模型训练、系统开发的技术担当",
  "✅ 靠谱的伙伴：说到做到，deadline前不消失",
  "✅ 互补的团队：我负责产品、数据、协调，你负责技术实现",
  "✅ 有想法的人：一起头脑风暴，碰撞出好点子",
];

const myAdvantages = [
  "✓ 不会拖后腿，执行力强",
  "✓ 能补齐非技术环节（产品设计、数据分析、展示汇报）",
  "✓ 有项目管理经验，能协调团队进度",
  "✓ 对AI应用场景有敏感度，能找到好的切入点",
];

const goals = [
  {
    title: "🏆 冲奖",
    description: "既然参加就要全力以赴，至少进决赛",
  },
  {
    title: "📚 学习",
    description: "和技术大神合作，提升AI实战能力",
  },
  {
    title: "🤝 交友",
    description: "认识志同道合的伙伴，积累人脉",
  },
];

const Portfolio = () => {
  return (
    <>
      <section className="section" id="skills">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Skills & Strengths</p>
            <h2>核心能力</h2>
            <p className="section-subtitle">产品 + 协调 + AI应用，用可执行的方案推动团队向前。</p>
          </div>
          <div className="card-grid">
            {skills.map((skill) => (
              <div className="card" key={skill.title}>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="teammates">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Looking for Teammates</p>
            <h2>🎯 我在寻找什么样的队友</h2>
          </div>
          <div className="split">
            <div className="card">
              <h3>期待的你</h3>
              <ul>
                {teammateNeeds.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>我的优势</h3>
              <ul>
                {myAdvantages.map((advantage) => (
                  <li key={advantage}>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="goals">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Competition Goals</p>
            <h2>比赛目标</h2>
          </div>
          <div className="card-grid">
            {goals.map((goal) => (
              <div className="card center" key={goal.title}>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
