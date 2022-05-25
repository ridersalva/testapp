import React, { useState } from 'react';
import db from '../data/db.json';
import '../css/Table.css';
import Table from 'react-bootstrap/Table'
import { Container, Row, Col } from 'react-bootstrap'

function Table_Design() {
    const [dbs, setDbs] = useState(db);
    return (
        <>
            <Row>
                <Col sm={4}></Col>
                <Col sm={8} className='Table'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Courses</th>
                                <th>wales</th>
                                <th>Last Upload</th>
                                <th className= "d-inline-block align-top">By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dbs.designs.slice(0, 5).map((designs) => (
                                <tr>
                                    <td>{designs.name}</td>

                                    <td>{designs.courses}</td>

                                    <td>{designs.wales}</td>

                                    <td>{designs.updated.slice(0, 10)}</td>
                                    
                                    <td className= "d-inline-block align-top"
                                        style={{ borderRadius: "50%", marginRight: "25px", color: "rgba(126, 195, 184)" }}>{designs.id}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}
export default Table_Design;