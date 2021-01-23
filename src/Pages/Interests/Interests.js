import React, { useContext } from "react";
import { InterestsContext } from "../../Provider/Interests/InterestsContext";

const Interests = (props) => {
  const context = useContext(InterestsContext);
  const content = context.content;

  let ct = [];
  if (content !== undefined) {
    ct = content.split(".");
    ct.pop();
  }

  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        {ct.map((item, inx) => (
          <p key={inx}>{item}.</p>
        ))}
      </div>
    </section>
  );
};

export default Interests;
