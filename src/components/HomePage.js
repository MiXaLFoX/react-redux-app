import React from "react";
import Button from "react-bootstrap/Button";

function HomePage ({history}) {
  return (
    <div className="content">
      <h1>welcome to react-redux application</h1>
      <Button onClick={() => history.push('/list')} variant="dark">Get started</Button>
    </div>
  )
}

export default HomePage;