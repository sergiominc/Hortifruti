import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Row, Col, Nav } from "react-bootstrap";
import { Grid, makeStyles, TextField } from "@material-ui/core";

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

function Header({ label }) {
  const classes = useStyles();

  return (
    <>
      <Row>
        <img src="header.jpg"></img>
        <p></p>
        <Col>
          <p>
            <b>proxima entrega disponivel em : </b>
            <p>23\04\2021 as 17h</p>
          </p>
          <p>
            <b>Formas de pagamento :</b>
            Aceitamos debito e credito
            <br />
            pedido minimo de R$50,00
          </p>
          <div className="d-flex justify-content-end"></div>
          <img src="arraia.jpg"></img>
        </Col>

        <Col>
          Menu
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item></Grid>
            <Grid item>
              <div>
                <b>Pesquisador de Preços</b>
              </div>
              <div>
                Estes preços são do dia 4\5\2021. O preço estimado pode stes
                preços são do dia 4\5\2021. O preço estimado pode ...
              </div>
              <TextField
                id="input-with-icon-grid"
                label="Pesquise o produto.."
              />
            </Grid>
          </Grid>
        </Col>
        <hr />
      </Row>
    </>
  );
}

export default Header;
