import React, { useContext } from "react";
import { SkillsContext } from "../../Provider/Skills/SkillsContext";

const Skill = (props) => {
  const context = useContext(SkillsContext);
  const { codingSkill, knowledge, tools } = context;

  let skills = [];
  if (codingSkill !== undefined) {
    skills = codingSkill;
  }

  let knows = [];
  if (knowledge !== undefined) {
    knows = knowledge;
  }

  let userTools = [];
  if (tools !== undefined) {
    userTools = tools;
  }

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          {userTools.map((item, inx) => (
            <li
              className="list-inline-item"
              key={inx}
              style={{ color: item.color }}
            >
              <i className={item.icon}></i>
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Coding skills</div>
        <ul className="fa-ul mb-0">
          {skills.map((item, inx) => (
            <li key={inx}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="subheading mb-3 mt-3">KNOWLEDGE</div>
        <ul className="fa-ul mb-0">
          {knows.map((item, inx) => (
            <li key={inx}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
