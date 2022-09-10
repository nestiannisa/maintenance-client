import React, { useState } from "react";
import "./dashbord.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import ViewBreakdown from "../component/ViewBreakdown";
import ViewAsset from "../component/ViewAsset";
import { useNavigate } from "react-router-dom";
function Dashbord() {
  const [page, setPage] = useState();

  const navigate = useNavigate()

  const changePage = (event) => {
    navigate("viewAsset");
  };

  const changePage1 = (event) => {
    navigate("viewBreakdown");
  };

  return (
    <>
      <Container className="pt-5 pb-5">
        <Row>
          <Col lg={2} className=" section">
            {page == "View Asset" ? (
              <>
                <div className="btnF" >
                  <p className="mt-3"> VIEW BREAKDOWN </p>
                </div>
                <div className="btnC">
                  <p className=" mt-3"> VIEW ASET</p>
                </div>
              </>
            ) : page == "View Breakdown" ? (
              <>
                <div className="btnE">
                  <p className="mt-3"> VIEW BREAKDOWN </p>
                </div>
                <div className="btnD" >
                  <p className=" mt-3"> VIEW ASET</p>
                </div>
              </>
            ) : (
              <>
                <div className="btnF" onClick={(event) => changePage1()}>
                  <p className="mt-3"> VIEW BREAKDOWN </p>
                </div>
                <div className="btnD" onClick={(event) => changePage()}>
                  <p className=" mt-3"> VIEW ASET</p>
                </div>
              </>
            )}
          </Col>
          <Col className="section1">
            {page == "View Asset" ? <ViewAsset /> : <></>}
            {page == "View Breakdown" ? <ViewBreakdown /> : <></>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashbord;
