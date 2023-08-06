import React from "react";
import "../css/main.css";
import "../css/acc.css";
import "../css/wrap.css";
import img1 from "../assets/images/Accreditations/Ministry_ayush-removebg-preview.png";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Accreditations() {
  return (
    <>
      <div className="wrap">
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <div className="client-logo">
                <Image src={img1} className="img  img-fluid " />
              </div>
              <h5 className="client-h5 text-center">Ministry of Ayush</h5>
            </Col>
          </Row>
        </Container>{" "}
      </div>
    </>
  );
}
{
  /* <Container>
<Row>
  <Col lg={3} md={4}>
    <div className="client-logo">
      <Image src={img1} className="img  img-fluid " />
    </div>
    <h5 className="client-h5 text-center">Ministry of Ayush</h5>
  </Col>
</Row>
</Container> */
}
