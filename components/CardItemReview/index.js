import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";
import Title from "components/Title";
import ReadMore from "components/Icon/ReadMore";
import CardItemHorizontal from "components/CardItemHorizontal";

const propTypes = {};

const CardItemReview = ({
  titleTop,
  authorTop,
  ImageSrcTop,
  label,
  href,
  listItem = [],
}) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="card-item-review">
      <Title label={label} />
      <Row>
        <Col span={24}>
          <CardItem
            title={titleTop}
            author={authorTop}
            ImageSrc={ImageSrcTop}
          />
        </Col>
        {listItem.map((el) => (
          <CardItemHorizontal
            key={el.id}
            isRate={el.isRate}
            isAuthor={el.isAuthor}
            rate={el.rate}
            title={el.title}
            author={el.author}
            imgSrc={el.imgSrc}
          />
        ))}
      </Row>
      <ReadMore href={href} />
    </div>
  );
};

CardItemReview.propTypes = propTypes;
export default CardItemReview;
