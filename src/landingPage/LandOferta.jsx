import BlocoOferta from "./BlocoOferta.jsx";
import { Field, Form } from "react-final-form";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header.jsx";
import { Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import BlocoDadosPessoais from "./BlocoDadosPessoais.jsx";
import BlocoEntrega from "./BlocoEntrega.jsx";
import BlocoInfoAutomatico from "./BlocoInfoAutomatico.jsx";
//import AppButton from "../AppButton";

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

  const api = Axios.create({
    baseURL: "http:\\server",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const cadastra = async (values) => {
    const response = await this.api.post("/backendHorti/cadastra/", values);
    return response.data;
  };

  const onSubmitDados = async (values) => {
    cadastra(values);
  };
  return (
    <Form
      onSubmit={(values) => {
        onSubmitDados(values);
      }}
      initialValues={{ contestavel: "1" }}
      render={({ handleSubmit }) => (
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
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
            <Button type="submit" variant="contained" color="primary">
              Concluir um pedido
            </Button>
          </Container>
        </form>
      )}
    ></Form>
  );
}
