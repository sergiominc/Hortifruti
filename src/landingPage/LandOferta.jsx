import BlocoOferta from "./BlocoOferta.jsx";

import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header.jsx";
import Topo from "./Topo.jsx";
import { Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import BlocoDadosPessoais from "./BlocoDadosPessoais.jsx";
import BlocoEntrega from "./BlocoEntrega.jsx";
import BlocoInfoAutomatico from "./BlocoInfoAutomatico.jsx";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "10px",
    border: "0px #d5d5d5 solid",
    backgroundColor: "#eeeeee",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "0.8em",
  },
}));

export default function LandOferta() {
  const classes = useStyles();

  return (
    <>
      <Container fluid="md" className={classes.root}>
        <Row>
          <p></p>
        </Row>

        <Header label="Crie um pedido recorrente" />
        <BlocoOferta pedido="Frutas, Legumes e Verduras" />
        <BlocoOferta pedido="Carne, Aves e Peixes" />
        <BlocoOferta pedido="Higiene e limpeza" />
        <BlocoDadosPessoais dadospessoais="Dados Pessoais" />
        <BlocoEntrega dadospessoais="Seu endereço de Entrega" />
        <BlocoInfoAutomatico dadospessoais="Informações do pedido automatico" />
      </Container>
    </>
  );
}
