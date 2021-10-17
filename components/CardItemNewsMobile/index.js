import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import { Card, Col, Row } from "antd";

const propTypes = {};

const CardItemNewsMobile = ({
  category = "category",
  createAt = "1 hour ago",
  description = "description",
}) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Card  className="card-item-news-mobile">
      <Row>
        <Col className="card-item-news-mobile-category" span={12}>
          {category}
        </Col>
        <Col className="card-item-news-mobile-createAt" span={12}>
          {createAt}
        </Col>
        <Col className="card-item-news-mobile-description" span={24}>
          {description}
        </Col>
      </Row>
    </Card>
  );
};

CardItemNewsMobile.propTypes = propTypes;
export default CardItemNewsMobile;
