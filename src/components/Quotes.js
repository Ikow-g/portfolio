import React from "react";
import { Container } from "react-bootstrap";

function Quotes() {
  return (
    <div className="quotes-parent-container">
      <Container className="quotes">
        <p>
          By day, a<span> software engineer</span>, a
          <span> UI/UX designer </span>
          and a
          <span> full stack developer</span>. By night, a<span> musician</span>,
          <span> artist</span>, and
          <span> dreamer</span>.
        </p>
      </Container>
    </div>
  );
}

export default Quotes;
