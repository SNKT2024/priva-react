import React from "react";
import "../css/color.css";
import "../css/topbar.css";
import { Container } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../css/main.css";

export default function Topbar() {
  return (
    <>
      <section id="topbar" className="topbar bgc-top d-flex align-items-center">
        <Container className="p-1 d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center ms-3 ">
            <span className="me-1 d-flex text-center">
              <EmailIcon className="text-white  " fontSize="string"></EmailIcon>
            </span>
            <span>
              <a href="mailto:hiluxlabs@outlook.com" className="email">
                hiluxlabs@outlook.com
              </a>
            </span>

            <span className="text-white contact d-block ms-3">
              <LocationOnIcon fontSize="string" />
            </span>
            <span className="text-center text-white contact">
              {" "}
              Hinjewadi, Pune
            </span>
          </div>
          <div className="social-links d-none d-lg-block d-md-block d-flex align-items-center me-3">
            <a href="" className="me-3 socialicons">
              <TwitterIcon fontSize="string" />
            </a>
            <a href="" className="me-3 socialicons">
              <FacebookIcon fontSize="string" />
            </a>
            <a href="">
              <InstagramIcon fontSize="string socialicons" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
