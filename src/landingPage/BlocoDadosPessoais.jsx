import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
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
export default function BlocoDadosPessoais({ dadospessoais }) {
  const classes = useStyles();
  return (
    <>
      <Row>
        <Col>
          <div>
            <h5>{dadospessoais} </h5>
            <div>
              É muito importante que os dados estejam corretos na entrega
            </div>
          </div>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              {" "}
              <TextField id="standard-basic" label="CPF" />
            </div>
            <div>
              <TextField id="standard-basic" label="Nome" />
            </div>
            <div>
              <TextField id="standard-basic" label="Celular" />
            </div>
          </form>
          <hr />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
