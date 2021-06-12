import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (props) => (props.secondary ? "#fff" : "#777777"),
    color: (props) => (props.secondary ? "#1351B4" : "#fff"),
    border: "1px solid",
    textTransform: "none",
    fontSize: "13px",
  },
}));

export default function AppButton(props) {
  const classes = useStyles(props);

  return (
    <Row>
      <Col>
        <Button
          disableElevation
          color={props.secondary ? "default" : "primary"}
          classes={{ root: classes.root }}
          {...props}
        />
      </Col>
      <Col></Col>
    </Row>
  );
}
