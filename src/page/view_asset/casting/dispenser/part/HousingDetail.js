import React, { useEffect, useState } from "react";
// import "../dashbord/dashbord.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row, Form, Image } from "react-bootstrap";
import { detailById, updateData } from "../../../../../action/maintenanceAction";
import { showProblem } from "../../../../../action/problemAction";
import { useParams } from "react-router-dom";
import { timeSince } from "../../../../../utils/time";
import { year } from "../../../../../utils/year";
import { showPenyebab } from "../../../../../action/penyebabAction";
import { showBagian } from "../../../../../action/bagianAction";
import { showJenisPerbaikan } from "../../../../../action/jenisPerbaikanAction";
import { API_URL } from "../../../../../utils/constant";

function HousingDetail() {
  const { detailDataResult, detailDataLoading, detailDataError } = useSelector(
    (state) => state.maintenance
  );
  const { showProblemResult, showProblemLoading, showProblemError } =
    useSelector((state) => state.problem);
  const { showPenyebabResult, showPenyebabLoading, showPenyebabError } =
    useSelector((state) => state.penyebab);
  const { showBagianResult, showBagianLoading, showBagianError } = useSelector(
    (state) => state.bagian
  );
  const {
    showJenisPerbaikanResult,
    showJenisPerbaikanLoading,
    showJenisPerbaikanError,
  } = useSelector((state) => state.jenisPerbaikan);

  const [sections, setSections] = useState("");
  const [bagian, setBagian] = useState("");
  const [problem, setProblem] = useState("");
  const [penyebab, setPenyebab] = useState("");
  const [jenisPerbaikan, setJenisPerbaikan] = useState("");
  const [catatan, setCatatan] = useState("");

  const dispatch = useDispatch();
  const params = useParams();

  const id = +params.id;

  useEffect(() => {
    dispatch(detailById(id));
    dispatch(showProblem());
    dispatch(showPenyebab());
    dispatch(showBagian());
    dispatch(showJenisPerbaikan());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1.masuk handle submit");

    dispatch(
      updateData(id, {
        Section: sections,
        Bagian: bagian,
        Problem: problem,
        Penyebab: penyebab,
        Jenis_Perbaikan: jenisPerbaikan,
        Catatan:catatan
      })
    );
  };

  const [data, setData] = useState({
    Catatan: "",
    category: "",
    part: "",
    Problem: "",
    Bagian: "",
    Jenis_Perbaikan: "",
    Penyebab: "",
    Running_Hours: "",
  });

  const category = [
    {
      id: "1",
      value: "Electric",
    },
    {
      id: "2",
      value: "Program",
    },
    {
      id: "3",
      value: "Mechanic",
    },
  ];
  return (
    <>
    {detailDataResult ? (
      detailDataResult.map((mesin) => {
        return (
          <>
            <Container className="pt-5">
              <Row className="station_casting">
                <Col md={2} className="name_part ">
                  <h1>CAST</h1>
                </Col>
                <Col>
                  <Row>
                    <p>
                      CM/{year(mesin.createdAt)}/0{mesin.id}
                    </p>
                  </Row>
                  <Row>
                    <div className="casting_time">
                      <Col>
                        <p>T : {timeSince(mesin.createdAt)}</p>
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
                    <div className="casting">
                      <p>{mesin.Section}</p>
                      <p>No: {mesin.No_Mesin}</p>
                      <p>{mesin.Nama_Mesin}</p>
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row className="pt-5 casting_part">
                <Col>
                  {showBagianResult ? (
                    showBagianResult.map((bagian) => {
                      console.log("bag", mesin.Bagian);
                      if (mesin.Bagian == bagian.Value) {
                        return (
                          <Image
                            src={`${API_URL}/${bagian.Image}`}
                            width="450px"
                            height="400px"
                          />
                        );
                      }
                    })
                  ) : (
                    <></>
                  )}
                  <p></p>
                </Col>
                <Col className="box_casting">
                  <Row>
                    <Form>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {" "}
                            Gejala Kerusakan<small>*</small>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            disabled
                            value={mesin.Gejala_Kerusakan}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {" "}
                            Bagian<small>*</small>
                          </Form.Label>
                          <Form.Select placeholder={mesin.Bagian}>
                            <option>{mesin.Bagian}</option>;
                            {showBagianResult ? (
                              showBagianResult.map((bagians) => {
                                return (
                                  <option value={bagians.Value}>
                                    {bagians.Value}
                                  </option>
                                );
                              })
                            ) : (
                              <></>
                            )}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {" "}
                            Problem<small>*</small>
                          </Form.Label>
                          <Form.Select
                            placeholder={mesin.problem}
                            onChange={(event) =>
                              setProblem(event.target.value)
                            }
                          >
                            <option>{mesin.Problem}</option>;
                            {showProblemResult ? (
                              showProblemResult.map((problems) => {
                                console.log(problems.Value);
                                return (
                                  <option value={problems.Value}>
                                    {problems.Value}
                                  </option>
                                );
                              })
                            ) : (
                              <></>
                            )}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {" "}
                            Penyebab<small>*</small>{" "}
                          </Form.Label>
                          <Form.Select placeholder={mesin.problem}>
                            <option>{mesin.Penyebab}</option>;
                            {showPenyebabResult ? (
                              showPenyebabResult.map((penyebabs) => {
                                return (
                                  <option value={penyebabs.Value}>
                                    {penyebabs.Value}
                                  </option>
                                );
                              })
                            ) : (
                              <></>
                            )}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {" "}
                            Jenis Perbaikan<small>*</small>{" "}
                          </Form.Label>
                          <Form.Select placeholder={mesin.problem}>
                            <option>{mesin.Jenis_Perbaikan}</option>;
                            {showJenisPerbaikanResult ? (
                              showJenisPerbaikanResult.map((jenis) => {
                                return (
                                  <option value={jenis.Value}>
                                    {jenis.Value}
                                  </option>
                                );
                              })
                            ) : (
                              <></>
                            )}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {" "}
                            Catatan<small>*</small>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            value={mesin.Catatan}
                            id="Catatan"
                            onChange={(event) =>
                              setCatatan(event.target.value)
                            }
                          />
                        </Form.Group>
                        <h5>MTTR</h5>
                        <p>{mesin.Mttr}</p>
                        <h5>MTBF</h5>
                        <p>{mesin.Mtbf}</p>
                        <h5>Running Hours</h5>
                        <p>{mesin.Running_Hours}</p>
                      </Col>
                    </Form>
                  </Row>
                </Col>
                <Col md={1} className="pl-3 ml-3">
                  <div className="detail_edit">
                    <Row className="pl-3">
                      <p>
                        Category<small>*</small>
                      </p>
                      {category.map(({ id, value }) => {
                        return (
                          <Form.Check
                            inline
                            label={value}
                            type="checkbox"
                            className="ml-3"
                            name="group2"
                            value={value}
                          ></Form.Check>
                        );
                      })}
                      {/* <Form.Check
                        inline
                        label="Electric"
                        type="checkbox"
                        className="ml-3"
                        name="group2"
                        value={mesin.cat}
                      ></Form.Check>
                      <Form.Check
                        inline
                        label="Program"
                        type="checkbox"
                        name="group2"
                      ></Form.Check>
                      <Form.Check
                        inline
                        label="Mechanic"
                        type="checkbox"
                        name="group2"
                      ></Form.Check> */}
                    </Row>
                    <Row>
                      <p>
                        Availibility Part<small>*</small>
                      </p>

                      <Form.Check
                        inline
                        label="Available"
                        type="radio"
                        id="part"
                        name="part"
                      ></Form.Check>
                      <Form.Check
                        inline
                        label="Not Available"
                        type="radio"
                        id="part"
                        name="part"
                      ></Form.Check>

                      <Button
                        onClick={(e) => handleSubmit(e)}
                        className="mt-3"
                      >
                        Update
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        );
      })
    ) : (
      <></>
    )}
  </>
);
}

export default HousingDetail;
