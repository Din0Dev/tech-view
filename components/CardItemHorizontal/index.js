import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Col, Row } from "antd";

const propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  className: PropTypes.string,
};

const CardItemHorizontal = (props) => {
  const {
    title = "Title",
    imgSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    className = "",
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
          </Col>
        </Row>
      </Card>
    </div>
  );
};

CardItemHorizontal.propTypes = propTypes;
export default CardItemHorizontal;
