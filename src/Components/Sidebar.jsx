import React from 'react';
import { Nav, Link, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../css/sidebar.css';

function Sidebar() {
  return (
    <>
      <Nav className='col-md-12 d-non d-md-block sidebar'>
        <div className='sidebar-sticky'></div>
        <Col>
          <Nav.Item className='sideLinks'>
            <Nav.Link href="Design">Designs</Nav.Link>
            <Nav.Link href="Setout">Setouts</Nav.Link>
          </Nav.Item>
        </Col>
      </Nav>
    </>
  )
}
export default Sidebar
