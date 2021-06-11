import React from "react";
import {
  FormControlLabel,
  makeStyles,
  Switch,
  TextField,
} from "@material-ui/core";
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
export default function BlocoEntrega({ dadospessoais }) {
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
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                }
                label="Desejo sacolas para embalar minnhas compras"
              />
            </div>
            <div>
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />
                }
                label="Caso nao tenha algum produto posso trocar por semelhante"
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="CEP"
                style={{ margin: 8 }}
              />

              <TextField
                id="standard-basic"
                label="Endereço"
                style={{ margin: 8 }}
              />

              <TextField
                id="standard-basic"
                label="Numero"
                style={{ margin: 8 }}
              />
              <TextField
                id="standard-basic"
                label="Complemento"
                style={{ margin: 8 }}
              />

              <TextField
                id="standard-basic"
                label="Referencia"
                style={{ margin: 8 }}
              />
            </div>
          </form>
          <hr />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
