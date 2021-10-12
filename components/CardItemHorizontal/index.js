import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Col, Row, Rate } from "antd";

const propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  className: PropTypes.string,
  rate: PropTypes.number,
  author: PropTypes.string,
  isRate: PropTypes.bool,
  isAuthor: PropTypes.bool,
};

const CardItemHorizontal = (props) => {
  const {
    title = "Title",
    imgSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    className = "",
    isRate = false,
    isAuthor = false,
    rate = 5,
    author = "By NamDo",
  } = props;
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className={`card-item-horizontal ${className}`}>
      <Card hoverable>
        <Row>
          <Col span={8}>
            <div className="card-item-horizontal-img">
              <img src={imgSrc} alt={title} srcset="" />
            </div>
          </Col>
          <Col span={16}>
            <div className="card-item-horizontal-title">{title}</div>
            {isRate && (
              <Rate
                className="card-item-horizontal-rate"
                disabled
                defaultValue={rate}
              />
            )}
            {isAuthor && (
              <div className="card-item-horizontal-author">{author}</div>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

CardItemHorizontal.propTypes = propTypes;
export default CardItemHorizontal;
