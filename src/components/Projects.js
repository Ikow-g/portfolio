import React from "react";
import { Container } from "react-bootstrap";

const Project = () => {
  return (
    <Container className="text-light">
      <div className="project-main-title mb-4">
        <h3>P R O J E C T S</h3>
      </div>
      <div className="project-list">
        <div className="row border my-3 p-3">
          <div className="col">
            <div>
              <h4>Project 1</h4>
              <p>Description</p>
            </div>
            <div>
              <button>Open Project</button>
            </div>
          </div>
          <div className="col">
            <div>
              <h5>Tools</h5>
              <div className="d-flex">
                <div>tools 1</div>
                <div>tools 2</div>
              </div>
            </div>
            <div>
              <h5>Tags</h5>
              <div className="d-flex">
                <div>#example</div>
                <div>#example</div>
                <div>#example</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
