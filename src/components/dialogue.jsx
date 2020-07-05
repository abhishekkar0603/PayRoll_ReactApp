import React, { useState, useEffect } from "react";
import {
  Header,
  Segment,
  Button,
  Icon,
  Container,
  Divider
} from "semantic-ui-react";

let modal = {
  display: "bold",
  position: "fixed",
  zIndex: "1",
  paddingTop: "100px",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)"
};
let stl = { width: "80%", paddingLeft: "20%" };

const Dialogue = ({ showProp, idProp }) => {
  const [show, setShow] = useState(false);
  const [id] = useState(idProp);

  useEffect(() => {
    setShow(showProp);
  }, [showProp]);

  const handleDelete = async () => {
    const data = { id };
    const res = await fetch("http://127.0.0.1:8000/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      window.location.reload();
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  let dialogue = (
    <div style={modal}>
      <Container>
        <Segment fluid>
          <div style={stl}>
            <Header as="h3">Deletion Confirmation</Header>
          </div>
          <Divider horizontal />
          <div style={stl}>Press "Confirm" button for deletion.</div>
          <Divider horizontal />
          <div style={stl}>
            <Button color="green" onClick={handleDelete}>
              <Icon name="trash" />
              Confirm
            </Button>
            <Button color="red" onClick={() => setShow(false)}>
              <Icon name="cancel" />
              Cancel
            </Button>
          </div>
        </Segment>
      </Container>
    </div>
  );

  if (!show) {
    dialogue = null;
  }

  return <div>{dialogue}</div>;
};

export default Dialogue;
