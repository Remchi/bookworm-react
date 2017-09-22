import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddBookCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Add new book</Card.Header>
      <Link to="/books/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddBookCtA;
