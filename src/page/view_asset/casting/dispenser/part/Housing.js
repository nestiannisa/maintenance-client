import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { showData } from "../../../../../action/maintenanceAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Housing() {
  const { showDataResult, showDataLoading, showDataError } = useSelector(
    (state) => state.maintenance
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showData());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Table className="mt-5">
          <thead>
            <th>Section</th>
            <th>Nomor Mesin</th>
            <th>Gejala Kerusakan</th>
            <th>Bagian</th>
            <th>Problem</th>
            <th>Penyebab</th>
            <th>Jenis Perbaikan</th>
            <th>Mttr</th>
            <th>Mtbf</th>
            <th>Running Hours</th>
            <th>Action</th>
          </thead>
          {showDataResult ? (
            showDataResult.map((housing) => {
              return (
                <>
                  <tbody>
                    <tr>
                      {housing.Bagian === "Housing" ? (
                        <>
                          <td>{housing.Section}</td>
                          <td>{housing.No_Mesin}</td>
                          <td>{housing.Gejala_Kerusakan}</td>
                          <td>{housing.Bagian}</td>
                          <td>{housing.Problem}</td>
                          <td>{housing.Penyebab}</td>
                          <td>{housing.Jenis_Perbaikan}</td>
                          <td>{housing.Mttr}</td>
                          <td>{housing.Mtbf}</td>
                          <td>{housing.Running_Hours}</td>
                          <td>
                            <Link to={`detail/${housing.id}`}>
                            Edit
                            </Link>
                          </td>
                        </>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                </>
              );
            })
          ) : (
            <p></p>
          )}
        </Table>
      </Container>
    </>
  );
}

export default Housing;
