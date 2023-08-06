import React from "react";
import Topbar from "./Topbar";
import Navigation from "./Navigation";
import Intro from "./Intro";
import "../css/color.css";
import Intro2 from "./Intro2";
import Why from "./Why";
import "../css/main.css";
import Manufacture from "./Manufacture";
import { Col, Container, Row } from "react-bootstrap";
import Accreditations from "./Accreditations";
import Aboutus from "./Aboutus";
import Foot from "./Foot";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navigation />
      <Intro />
      <Intro2 />

      <Why />

      <Manufacture />

      {/* <Aboutus /> */}

      <Foot />
    </>
  );
}
