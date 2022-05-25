import React, { useState } from 'react';
import db from '../data/db.json';
import '../css/Table.css';

import { Container, Row, Col } from 'react-bootstrap'

function Table_Design() {
    const [dbs, setDbs] = useState(db);
    return (
        <>
            <Row>
                <Col sm={4}></Col>
                <Col sm={8} className='Table'>
                    <table>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Courses</th>
                                <th>wales</th>
                                <th>Last Upload</th>
                                <th>By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dbs.designs.map((designs) => (
                                <tr>
                                    <td>{designs.name}</td>
                                    <hr />
                                    <td>{designs.courses}</td>
                                    <hr />
                                    <td>{designs.wales}</td>
                                    <hr />
                                    <td>{designs.id}</td>
                                    <hr />
                                    <td>{designs.updated}</td>
                                    <hr />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    )
}
export default Table_Design;