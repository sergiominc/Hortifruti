import React, { useState } from "react";
import { ButtonGroup, makeStyles, TextField } from "@material-ui/core";
import {
  Alert,
  Container,
  Row,
  Col,
  Nav,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

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
export default function BlocoInfoAutomatico({ dadospessoais }) {
  const classes = useStyles();
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);
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
              <TextField id="standard-basic" label="Nome da lista" />
            </div>
            <div> .</div>
            <div>
              <ToggleButtonGroup
                type="checkbox"
                value={value}
                onChange={handleChange}
              >
                <ToggleButton value={1}>Entrega em domicilio</ToggleButton>
                <ToggleButton value={2}>Retirada na loja</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div>.</div>
            <div className={classes.container} noValidate>
              <TextField
                id="datetime-local"
                label="Escolha o dia dos pedidos"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
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
