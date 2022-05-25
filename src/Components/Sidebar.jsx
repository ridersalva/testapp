import React from 'react';
import {Nav,Link,Col} from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import '../css/sidebar.css';

 function Sidebar() {
  return (
    <>
    <Nav className='col-md-12 d-non d-md-block bg-light sidebar'>
        <div className='sidebar-sticky'></div>
       <Col>
        <Nav.Item>
            <Nav.Link href="#">Design</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
            <Nav.Link href="#">Setouts</Nav.Link>
        </Nav.Item>
        </Col>
    </Nav>
    </>
  )
}
export default Sidebar
