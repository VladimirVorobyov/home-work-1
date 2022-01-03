import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardPost = ({ item }) => {
  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <Link to={`/post/${item.id}`}>Card title {item.userId}</Link>
            </Card.Title>
            <Card.Text>{item.title}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
