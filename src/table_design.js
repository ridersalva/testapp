import React, { useState } from 'react';
import db from './data/db.json';

import { Container, Row, Col } from 'react-bootstrap'

function Table_Design() {
    const [dbs, setDbs] = useState(db);
    return (
        <div>
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
                        <hr/>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default Table_Design;