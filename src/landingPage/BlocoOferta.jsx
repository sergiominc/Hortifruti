import React from "react";
import { makeStyles } from "@material-ui/core";
import { Alert, Container, Row, Col, Nav } from "react-bootstrap";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: "10px",
    border: "1px #d5d5d5 solid",
    backgroundColor: "#ffffff",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "0.8em",
  },
}));
export default function BlocoOferta({ pedido }) {
  const classes = useStyles();
  return (
    <>
      <Row>
        <Col>
          <p>
            <h5>{pedido} </h5>
            <p>
              <img src="foto1.jpg" />{" "}
            </p>
          </p>
          <div>6 bananas prata</div>
          <div>3 Tomates verdinhos para salada</div>
          <div>2 Pés de alfaces americanas</div>
          <div>1 Repolho pequeno</div>
          <div>6 pepinos japones</div>

          <hr />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
