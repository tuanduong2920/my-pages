import React, { useContext, memo } from "react";
import { ProjectContext } from "../../Provider/Project/ProjectContext";

const ListProjectComponent = ({ data }) => {
  return data.map((i) => (
    <div className="col-lg-6 col-sm-12 mb-3">
      <div className="card overflow-hidden bg-light shadow-sm" style={{ width: "100%" }}>
        <iFrame
          src={i.link}
          scrolling="no"
          frameborder="0"
          sandbox
          width="auto"
          height="200"
        ></iFrame>
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <p className="card-text">{i.tech}</p>
          <a href={i.link} target="_blank" className="btn btn-primary">
            Xem
          </a>
        </div>
      </div>
    </div>

  ));
};

const Project = (props) => {
  const context = useContext(ProjectContext);

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Project</h2>
        <div className="d-flex flex-wrap justify-content-between">
          <ListProjectComponent data={context} />
        </div>
      </div>
    </section>
  );
};

export default Project;
