import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addData } from "../../../action/maintenanceAction";

function Ladle() {


  const [data, setData] = useState({
    Section: "Casting",
    No_Mesin: "1",
    Gejala_Kerusakan: " ",
    Bagian: " ",
    Problem: " ",
    Penyebab: " ",
    Jenis_Perbaikan: " ",
    Mttr: " ",
    Mtbf: " ",
    Running_Hours: " ",
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("1.masuk handle submit");
    dispatch(
      addData(data)
    );
  };
  return (
    <>
      <Container className="pt-5">
        <Row className="station_ladle">
          <Col md={2} className="name_part ">
            <h1>CAST</h1>
          </Col>
          <Col>
            <Row>
              <p>CM/2022/010281</p>
            </Row>
            <Row>
              <div className="ladle_time">
                <Col>
                  <p>T : 7/1/2022 12:08:00 AM</p>
                </Col>
                <Col>
                  <p>S : 7/1/2022 12:24:00 AM (16 ')</p>
                </Col>
                <Col>
                  <p>F : 7/1/2022 1:34:00 AM (70 ')</p>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="ladle">
                <p>Casting</p>
                <p>No:</p>
                {/* <p>Station</p> */}
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="pt-5 ladle_part">
          <Col>
            <p>
              <span>1</span>
            </p>
          </Col>
          <Col className="box_ladle">
            <Form >
              <Row>
                <Col>
                  <Form.Label>Gejala Kerusakan</Form.Label>
                  <Form.Control
                    id="Gejala_Kerusakan"
                    name="Gejala_Kerusakan"
                    value={data.Gejala_Kerusakan}
                    onChange={(event) => setData({...data, Gejala_Kerusakan: event.target.value})}
                  ></Form.Control>
                  <Form.Label> Bagian</Form.Label>
                  <Form.Control
                   id="Bagian"
                   name="Bagian"
                   value={data.Bagian}
                   onChange={(event) => setData({...data, Bagian: event.target.value})}
                  ></Form.Control>
                  <Form.Label>Problem</Form.Label>
                  <Form.Control
                   id="Problem"
                   name="Problem"
                   value={data.Problem}
                   onChange={(event) => setData({...data, Problem: event.target.value})}
                   ></Form.Control>
                  <Form.Label>Penyebab </Form.Label>
                  <Form.Control
                   id="Penyebab"
                   name="Penyebab"
                   value={data.Penyebab}
                   onChange={(event) => setData({...data, Penyebab: event.target.value})}
                  ></Form.Control>
                  <Form.Label>Jenis Perbaikan </Form.Label>
                  <Form.Control
                   id="Jenis_Perbaikan"
                   name="Jenis_Perbaikan"
                   value={data.Jenis_Perbaikan}
                   onChange={(event) => setData({...data, Jenis_Perbaikan: event.target.value})}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>MTTR</Form.Label>
                  <Form.Control
                   id="Mttr"
                   name="Mttr"
                   value={data.Mttr}
                   onChange={(event) => setData({...data, Mttr: event.target.value})}
                  ></Form.Control>
                  <Form.Label>MTBF</Form.Label>
                  <Form.Control as="textarea" rows="4"
                   id="Mtbf"
                   name="Mtbf"
                   value={data.Mtbf}
                   onChange={(event) => setData({...data, Mtbf: event.target.value})}
                  ></Form.Control>
                  <Form.Label>Running Hours</Form.Label>
                  <Form.Control
                   id="Running_Hours"
                   name="Running_Hours"
                   value={data.Running_Hours}
                   onChange={(event) => setData({...data, Running_Hours: event.target.value})}
                  ></Form.Control>
                </Col>
              </Row>
              <div className="button_ladle">
                <Button onClick={(e) => submitHandler(e)}> Save</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Ladle;
