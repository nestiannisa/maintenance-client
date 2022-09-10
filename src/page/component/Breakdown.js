import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showData } from "../../action/maintenanceAction";
import { showLine } from "../../action/lineAction";
import { showSection } from "../../action/sectionAction";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { timeSince } from "../../utils/time";
import { year } from "../../utils/year";
function Breakdown() {
    const [selects, setSelects] = useState(" ");
    const [selected, setSelected] = useState(" ");
    const [selectNo, setSelectNo] = useState(" ");
    const [selectedNo, setSelectedNo] = useState(" ");
    console.log("1", selects);
    console.log("2", selected);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSelected(selects);
      setSelectedNo(selectNo);
    };
  
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
  
    const { showDataResult, showDataLoading, showDataError } = useSelector(
      (state) => state.maintenance
    );
  
    const { showLineResult, showLineLoading, showLineError } = useSelector(
      (state) => state.line
    );
  
    const { showSectionResult, showSectionLoading, showSectionError } =
      useSelector((state) => state.section);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(showData());
      dispatch(showLine());
      dispatch(showSection());
    }, [dispatch]);
  return (
    <div> <Row className="section2 mt-3">
    <Col lg={12}>
      <Form className="form-inline">
        <input type="date"></input>

        <Form.Select
          className="w-25"
          onChange={(e) => {
            setSelects(e.target.value);
          }}
        >
          <option value={" "} className="text-center">
            {" "}
            --- ALL Section ---
          </option>
          {showSectionResult ? (
            showSectionResult.map((section) => {
              return (
                <option value={section.value} onChange={setSelects}>
                  {section.value}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </Form.Select>
        <Form.Select
          className="w-25"
          onChange={(e) => {
            setSelectNo(e.target.value);
          }}
        >
          <option value={" "} className="text-center">
            {" "}
            --- ALL Line ---
          </option>
          {showLineResult ? (
            showLineResult.map((line) => {
              console.log("w", line.Name);
              return (
                <option value={line.Value} onChange={setSelectNo}>
                  {line.Name}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </Form.Select>

        <Button
          onClick={(event) => handleSubmit(event)}
          className="btn btn-primary justify-content-center"
        >
          {" "}
          Search
        </Button>
      </Form>
    </Col>
  </Row>
  {showDataResult ? (
    showDataResult
      .filter((mes) => {
        console.log("mesin", selected);
        console.log("sec", mes.Section);
        if (
          mes.Section.toLowerCase().includes(selected.toLowerCase())
        ) {
          console.log("sc", mes.Section);
          return mes;
        } else if (selected === " ") {
          return mes;
        }
      })
      .filter((no) => {
        console.log("line mesin", selectedNo);
        console.log("line", no.No_Mesin);
        if (no.No_Mesin == selectedNo) {
          return no;
        } else if (selectedNo === " ") {
          return no;
        }
      })
      .map((mesin) => {
        console.log("s1c", mesin);
        return (
          <>
            <Link to={`/${mesin.Section}/${mesin.id}`}>
              <Row key={mesin.id} className="dashbord_section4 ">
                <div className="dashbord_btn_section">
                  <Row>
                    <Col md={3} lg={2}>
                      <Button href={mesin.Section}>
                        {mesin.Section === "Casting" ? (
                          <p>CAST</p>
                        ) : mesin.Section === "AMB Charging" ? (
                          <p>ACHG</p>
                        ) : mesin.Section === "Lead Part" ? (
                          <p>LPRT</p>
                        ) : mesin.Section === "Formation" ? (
                          <p>FORM</p>
                        ) : mesin.Section === "MCB Charging" ? (
                          <p>MCHG</p>
                        ) : mesin.Section === "MCB Vrla" ? (
                          <p>VRLA</p>
                        ) : mesin.Section === "Pasting" ? (
                          <p>PAST</p>
                        ) : (
                          <p>ASSY</p>
                        )}
                      </Button>
                    </Col>
                    <Col className="col_viewBreackdown">
                      <p>
                        {" "}
                        CM/{year(mesin.createdAt)}/0{mesin.id}
                      </p>
                      <Row>
                        <Col>
                          <p> T: {timeSince(mesin.createdAt)}</p>
                        </Col>
                        <Col>
                          <p> cm</p>
                        </Col>
                        <Col>
                          <p> cm</p>
                        </Col>
                      </Row>
                      <div className="box_no_dashbord">
                        <p>
                          <span>No: {mesin.No_Mesin}</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Link>
          </>
        );
      })
  ) : (
    <></>
  )}</div>
  )
}

export default Breakdown