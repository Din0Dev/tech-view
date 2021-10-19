import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import { Col, Row } from "antd";
import ReadMore from "components/Icon/ReadMore";
import CardItem from "components/CardIem";
import CardItemHorizontal from "components/CardItemHorizontal";

const propTypes = {};

const CardItemNews = ({
  label,
  itemLeft1,
  itemRight1,
  itemRight2,
  imageSrcLeft1,
  imageSrcRight1,
  imageSrcRight2,
  listItemLeft = [],
  listItemRight = [],
  href = "#",
}) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  //! Render
  return (
    <div className="card-item-news">
      <Title label={label} />
      <Row gutter={30}>
        <Col className="card-item-news-left" lg={12} xs={24} md={24}>
          <CardItem title={itemLeft1} ImageSrc={imageSrcLeft1} author="" />
          {listItemLeft.map((el) => (
            <CardItemHorizontal
              key={el.id}
              title={el.title}
              imgSrc={el.imgSrc}
              isAuthor={el.isAuthor}
              isRate={el.isRate}
              rate={el.rate}
              author={el.author}
            />
          ))}
        </Col>
        <Col className="card-item-news-right" lg={12} xs={24} md={24}>
          <Row gutter={30}>
            <Col className="card-item-news-right_left" span={12}>
              <CardItem
                title={itemRight1}
                ImageSrc={imageSrcRight1}
                author=""
              />
            </Col>
            <Col className="card-item-news-right_right" span={12}>
              <CardItem
                title={itemRight2}
                ImageSrc={imageSrcRight2}
                author=""
              />
            </Col>
            {listItemRight.map((el) => (
              <CardItemHorizontal
                key={el.id}
                title={el.title}
                imgSrc={el.imgSrc}
                isAuthor={el.isAuthor}
                isRate={el.isRate}
                rate={el.rate}
                author={el.author}
              />
            ))}
          </Row>
        </Col>
      </Row>
      <ReadMore href={href} />
    </div>
  );
};

CardItemNews.propTypes = propTypes;
export default CardItemNews;
