import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../action/maintenanceAction";
import { showSection } from "../../../action/sectionAction";
import { showBagian } from "../../../action/bagianAction";
import { showPenyebab } from "../../../action/penyebabAction";
import { showProblem } from "../../../action/problemAction";
import { showJenisPerbaikan } from "../../../action/jenisPerbaikanAction";
import { useNavigate } from "react-router-dom";

function AddCasting() {
  const [sections, setSections] = useState("Casting");
  const [durasi, setDurasi] = useState("");
  const [noMesin, setNoMesin] = useState("");
  const [gejalaKerusakan, setGejalaKerusakan] = useState("");
  const [bagian, setBagian] = useState("");
  const [problem, setProblem] = useState("");
  const [catatan, setCatatan] = useState("");
  const [penyebab, setPenyebab] = useState("");
  const [jenisPerbaikan, setJenisPerbaikan] = useState("");
  const [runningHours, setRunningHours] = useState("");
  const [categories, setCategories] = useState("");
  const [part, setPart] = useState("");
  const [nama, setNama] = useState("");
  console.log("s", sections);
  const { showSectionResult, showSectionLoading, showSectionError } =
    useSelector((state) => state.section);
  const { showBagianResult, showBagianLoading, showBagianError } = useSelector(
    (state) => state.bagian
  );
  const { showPenyebabResult, showPenyebabLoading, showPenyebabError } =
    useSelector((state) => state.penyebab);
  const { showProblemResult, showProblemLoading, showProblemError } =
    useSelector((state) => state.problem);
  const {
    showJenisPerbaikanResult,
    showJenisPerbaikanLoading,
    showJenisPerbaikanError,
  } = useSelector((state) => state.jenisPerbaikan);
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
  const parts = [
    {
      id: "1",
      value: "Available",
    },
    {
      id: "2",
      value: "No available",
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSection());
    dispatch(showBagian());
    dispatch(showProblem());
    dispatch(showPenyebab());
    dispatch(showJenisPerbaikan());
  }, [dispatch]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addData({
        Section: sections,
        No_Mesin: noMesin,
        Nama_Mesin: nama,
        Gejala_Kerusakan: gejalaKerusakan,
        Bagian: bagian,
        Problem: problem,
        Penyebab: penyebab,
        Jenis_Perbaikan: jenisPerbaikan,
        Catatan: catatan,
        Durasi: durasi,
        Running_Hours: runningHours,
        category: categories,
        part: part,
      })
    );
    navigate("/viewBreakdown");
  };
  return (
    <>
      <Container className="mt-5 ">
        <Row className=" container_addData ">
          <div>
            <Form className="addHousing ">
              <Form.Label>Section</Form.Label>
              {/* <Form.Select
              onChange={(event) => setSections(event.target.value)}
            >
              <option>--Pilih Section--</option>;
              {showSectionResult ? (
                showSectionResult.map((section) => {
                  return (
                    <option
                      value={section.value}
                    >
                      {section.value}
                    </option>
                  );
                })
              ) : (
                <></>
              )}
            </Form.Select> */}
              <Form.Control
                value="Section"
                disabled
                onChange={(event) => setSections(event.target.value)}
              ></Form.Control>
              <Form.Label>Nomor Mesin</Form.Label>
              <Form.Control
                value={noMesin}
                onChange={(event) => setNoMesin(event.target.value)}
              ></Form.Control>
              <Form.Label>Nama Mesin</Form.Label>
              <Form.Control
                value={nama}
                onChange={(event) => setNama(event.target.value)}
              ></Form.Control>
              <Form.Label>Gejala Kerusakan</Form.Label>
              <Form.Control
                value={gejalaKerusakan}
                onChange={(event) => setGejalaKerusakan(event.target.value)}
              ></Form.Control>
              <Form.Label> Bagian</Form.Label>
              <Form.Select onChange={(event) => setBagian(event.target.value)}>
                <option>--Pilih Bagian--</option>;
                {showBagianResult ? (
                  showBagianResult.map((bagian) => {
                    return <option value={bagian.Value}>{bagian.Value}</option>;
                  })
                ) : (
                  <></>
                )}
              </Form.Select>
              {/* <Form.Control
              value={bagian}
              onChange={(event) => setBagian(event.target.value)}
            ></Form.Control> */}
              <Form.Label>Problem</Form.Label>
              <Form.Select onChange={(event) => setProblem(event.target.value)}>
                <option>--Pilih Problem--</option>;
                {showProblemResult ? (
                  showProblemResult.map((problem) => {
                    return (
                      <option value={problem.Value} id="Problem" name="Problem">
                        {problem.Value}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </Form.Select>

              {/* <Form.Control
              value={problem}
              onChange={(event) => setProblem(event.target.value)}
            ></Form.Control> */}
              <Form.Label>Penyebab </Form.Label>
              <Form.Select
                onChange={(event) => setPenyebab(event.target.value)}
              >
                <option>--Pilih Penyebab--</option>;
                {showPenyebabResult ? (
                  showPenyebabResult.map((penyebab) => {
                    return (
                      <option value={penyebab.Value}>{penyebab.Value}</option>
                    );
                  })
                ) : (
                  <></>
                )}
              </Form.Select>

              {/* <Form.Control
              value={penyebab}
              onChange={(event) => setPenyebab(event.target.value)}
            ></Form.Control> */}
              <Form.Label>Jenis Perbaikan </Form.Label>
              <Form.Select
                onChange={(event) => setJenisPerbaikan(event.target.value)}
              >
                <option>--Pilih Jenis Perbaikan--</option>;
                {showJenisPerbaikanResult ? (
                  showJenisPerbaikanResult.map((perbaikan) => {
                    return (
                      <option value={perbaikan.Value}>{perbaikan.Value}</option>
                    );
                  })
                ) : (
                  <></>
                )}
              </Form.Select>

              {/* <Form.Control
              value={jenisPerbaikan}
              onChange={(event) => setJenisPerbaikan(event.target.value)}
            ></Form.Control> */}
              {/* <Form.Label>MTTR</Form.Label>
            <Form.Control
              value={mttr}
              onChange={(event) => setMttr(event.target.value)}
            ></Form.Control>
            <Form.Label>MTBF</Form.Label>
            <Form.Control
              value={mtbf}
              onChange={(event) => setMtbf(event.target.value)}
            ></Form.Control> */}
              <Form.Label>Running Hours</Form.Label>
              <Form.Control
                value={runningHours}
                onChange={(event) => setRunningHours(event.target.value)}
              ></Form.Control>
              <Form.Label>Durasi</Form.Label>
              <Form.Control
                value={durasi}
                onChange={(event) => setDurasi(event.target.value)}
              ></Form.Control>
              <Form.Label>Catatan</Form.Label>
              <Form.Control
                value={catatan}
                onChange={(event) => setCatatan(event.target.value)}
              ></Form.Control>
              <Form.Label>Category</Form.Label>
              {category.map(({ id, value }) => {
                return (
                  <Form.Check
                    onChange={(event) => setCategories(event.target.value)}
                    inline
                    label={value}
                    type="checkbox"
                    className="ml-3"
                    name="group2"
                    value={value}
                  ></Form.Check>
                );
              })}
              <Form.Label>Availibility Part</Form.Label>
              {/* <Form.Check
                          inline
                          label="Available"
                          type="radio"
                          id="part"
                          name="part"
                          value={part}
                          onChange={(event) => setPart(event.target.value)}
                          ></Form.Check>
                        <Form.Check
                          onChange={(event) => setPart(event.target.value)}
                          inline
                          label="Not Available"
                          type="radio"
                          id="part"
                          name="part"
                          value={part}
                        ></Form.Check> */}
              {parts.map(({ id, value }) => {
                return (
                  <Form.Check
                    onChange={(event) => setPart(event.target.value)}
                    inline
                    label={value}
                    type="radio"
                    className="ml-3"
                    name="part"
                    id="part"
                    value={part}
                  ></Form.Check>
                );
              })}
              <Button className="mt-3" onClick={(e) => handleSubmit(e)}>
                Add
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default AddCasting;
