import React, { useState } from 'react';
import db from '../data/db.json';
import '../css/Table.css'
import Table from 'react-bootstrap/Table'
import { Container, Row, Col } from 'react-bootstrap'

function Table_Setouts() {
    const [dbs, setDbs] = useState(db);
    return (
        <> <Row>
            <Col sm={3}></Col>
            <Col sm={9} className='Table'>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>

                            <th>Machine Name</th>

                            <th>Machine Width</th>

                            <th>Courses</th>

                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbs.setouts.slice(0, 5).map((setouts) => (
                            <tr>
                                <td>{setouts.name}</td>

                                <td>{setouts.machine_name}</td>

                                <td>{setouts.machine_width}</td>

                                <td>{setouts.courses}</td>

                                <td>{setouts.updated.slice(0, 10)}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
        </>
    )
}
export default Table_Setouts;