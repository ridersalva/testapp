import React, { useState } from 'react';
import db from '../data/db.json';

import { Container, Row, Col } from 'react-bootstrap'

function Table_Setouts() {
    const [dbs, setDbs] = useState(db);
    return (
        <div>
            <table>

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
                    {dbs.setouts.map((setouts) => (
                        <tr>
                            <td>{setouts.name}</td>
                            <hr />
                            <td>{setouts.machine_name}</td>
                            <hr />
                            <td>{setouts.machine_width}</td>
                            <hr />
                            <td>{setouts.courses}</td>
                            <hr />
                            <td>{setouts.updated}</td>
                            <hr />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table_Setouts;