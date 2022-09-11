import React,{useEffect} from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
// import casting
import IMG1 from "../../../../assets/dispenser.png";
import IMG2 from "../../../../assets/dispenseer1.png";
import { housing, mttrHousing } from "../../../../action/mttrAction";
import { useDispatch, useSelector } from "react-redux";
function Dispenser() {
  const { housingResult, mttrHousingResult } = useSelector(
    (state) => state.mttr
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(housing());
    dispatch(mttrHousing());
  }, [dispatch]);
  return (
    <>
      <Container className="pt-5">
        <Row className="station_dispenser">
          <Col md={2} className="name_dispenser ">
            <h1>CAST</h1>
          </Col>
          <Col>
            <Row>{/* <p>CM/2022/010281</p> */}</Row>
            <Row>
              <div className="dispenser">
                {/* <p>Dispenser</p>
                <p>No:</p> */}
                {/* <p>Station 1</p> */}
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="image_dispenser">
            <Row>
              <Col>
                <Image
                  className="mt-5"
                  src={IMG1}
                  width="250px"
                  height="325px"
                />
              </Col>
              <Col>
                <Image src={IMG2} width="250px" height="520px" />
              </Col>
            </Row>
          </Col>
          <Col className="box_list_dispenser">
            <div className="list_dispenser">
              <h5 className="mb-3">List Part:</h5>
              <p>
                <a href="/viewAsset/casting/dispenser/housing">
                  <span>1.</span> Housing, 
                  <p>
                  MTTR: {mttrHousingResult/housingResult}
                  </p>
                </a>
              </p>
              <br />
              <p>
                <a href="/viewAsset/casting/leadsheet">
                  <span>2.</span> Leadsheet
                </a>
              </p>
              <br />
              <p>
                <a href="/viewAsset/casting/bolaCeramic">
                  <span>3.</span> Bola Ceramic
                </a>
              </p>
              <br />
              <p>
                <a href="/viewAsset/casting/lower">
                  <span>4.</span> Lower
                </a>
              </p>
            </div>

            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dispenser;
