import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Casting from "../../../assets/casting.png";
import { FaPlus } from "react-icons/fa";

function CastingView() {
  return (
    <>
      <Container>
        <div className="asset_view mt-5">
          <h3>
            <span>Asset View</span>
          </h3>
        </div>
        <Row className="mt-5 asset_part">
          <Col>
            <Row>
              <Col>
                <h5>Casting</h5>
                <ol>
                  {/* <li>
                    <a href="/viewAsset/casting/dispenser">Dispenser</a>
                  </li> */}
                  {/* <li>Mold</li>
                  <li>Ladle</li>
                  <li>leadle</li>
                  <li>Lead pump</li>
                  <li>Main conveyor</li>
                  <li>Conveyor grid</li>
                  <li>Trimdies</li>
                  <li>Conveyor scrap</li>
                  <li>Water cooling</li>
                  <li>Feedline</li>
                  <li>Stacker</li>
                  <li>Control Panel</li>
                  <li>Stacking plate</li>
                  <li>Air supply</li>
                  <li>stang mold</li>
                  <li>mold dalam</li>
                  <li>spie gear as motor</li>
                  <li>stelan tdk terpasang</li> */}
                  {/* <li>FRAME & ACCESSORIES UNIT</li>

                  <li>RECYCLE GRID CONVEYOR UNIT</li> */}
                  <li><a href="/viewAsset/casting/dispenser">DISPENSER UNIT</a></li>
                  <li>LADLE UNIT</li>
                  <li>STANG MOLD UNIT</li>
                  <li>MOLD UNIT</li>
                  <li>FEEDER UNIT</li>
                  <li>STACKER UNIT</li>
                  <li>TRIM DIES UNIT</li>
                  <li>INPUT ROLLER UNIT</li>
                  <li>ADJUSTER CHAIN UNIT A</li>
                  <li>ADJUSTER CHAIN UNIT B</li>
                  <li>STOPPER GRID UNIT</li>
                  <li>MOLD HINGE UNIT</li>
                  <li>GUIDER GRID UNIT</li>
                  <li>ENTRY PLATE UNIT</li>
                  <li>SLIDE ARM UNIT</li>
                  {/* <li>PENGAIT STOPPER GRID UNIT</li> */}
                  <li>TRIM DIES TRANSMITION UNIT</li>
                  <li>MAIN TRANSMITION UNIT</li>
                  <li>PENAHAN ENTRY STOPPER UNIT</li>
                  <li>ADJUSTER CHAIN UNIT C</li>
                  <li>ADJUSTER CHAIN UNIT D</li>
                  {/* <li>ENGKOL SWITCH TRANSMITION UNIT</li> */}
                  {/* <li>STACKER TRANSMITION UNIT CHAIN TRANSMITION UNIT</li> */}
                </ol>
              </Col>
              <Col>
                <h5>Pot Casting</h5>
                <ol>
                  <li>Pot</li>
                  <li>Control Panel</li>
                </ol>
                <h5>Ingot Conveyor CAST</h5>
                <ol>
                  <li>Main conveyor</li>
                  <li>Rotary transfer</li>
                  <li>Control Panel</li>
                  <li>Air supply</li>
                </ol>

                <div className="mt-5 buttonAdd ">
                  <Button
                    className="mt-5 "
                    href="/viewAsset/casting/addCasting"
                  >
                    <span>
                      <FaPlus /> Tambah Data Kerusakan
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="castingImage">
              <Image src={Casting} width="800px" height="800px" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CastingView;
