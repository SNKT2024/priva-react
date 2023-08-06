import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "../css/manufacture.css";
import "../css/main.css";
import "../css/manuresponsive.css";

import img1 from "../assets/images/Manufacture/resize_man_card1.jpg";
import img2 from "../assets/images/Manufacture/man_card2.jpg";
import img3 from "../assets/images/Manufacture/man_card3.jpg";
import img4 from "../assets/images/Manufacture/img 4.jpg";
import img5 from "../assets/images/Manufacture/img 5.jpg";
import img6 from "../assets/images/Manufacture/man_card_6.jpg";

export default function Manufacture() {
  return (
    <>
      <Container className="wrapper border border-primary ">
        <Row lg={4} md={6} xs={12}>
          <Imagecard />
          <Imagecard />
          <Imagecard />
          <Imagecard />

          <Imagecard />
          <Imagecard />
        </Row>
      </Container>
    </>
  );
}

const Imagecard = () => {
  return (
    <Card className="card">
      <div className="img-container">
        <Card.Img variant="top" src={img1} />
      </div>
      <div className="text-container">
        <h5>Pediatric</h5>
      </div>
    </Card>
  );
};
