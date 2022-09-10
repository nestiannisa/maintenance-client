import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiEdit, FiDelete } from "react-icons/fi";

function ViewAsset() {
  const mesin = [
    {
      id: "1",
      name: "ASSY",
      path: "casting",
    },
    {
      id: "2",

      name: "ACHG",
      path: "casting",
    },
    {
      id: "3",
      name: "CAST",
      path: "casting",
    },
    {
      id: "4",
      name: "FORM",
      path: "casting",
    },
    {
      id: "5",
      name: "LPRT",
      path: "casting",
    },
    {
      id: "6",
      name: "MCHG",
      path: "casting",
    },
    {
      id: "7",
      name: "VRLA",
      path: "casting",
    },
    {
      id: "8",
      name: "PAST",
      path: "casting",
    },
  ];

  return (
    <>
      <Container className="pt-5 pb-5">
        <Row>
          <Col lg={2} className=" section">
            <Link to={"/viewBreakdown"}>
            <div className="btnD">
                  <p className="mt-3"> VIEW BREAKDOWN </p>
            </div>
            </Link>
              <div valign="center" className="btnE">
                <p className=" mt-3"> VIEW ASET  </p>
              </div>
          </Col>
          <Col className="section1">
            <Row className="content-justify-center viewSec1">
              {mesin.map(({ id, name, path }) => {
                return (
                  <Col md={3} className="mt-5 viewSec">
                    <Link to={`/viewAsset/${path}`}>
                      <div className=" viewAsset_section ">
                        <div className="">

                        <p>{name}</p>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ViewAsset;
