import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Col, Row, Rate } from "antd";
import Link from "next/link";
import { randomDate } from "../../utils/randomDate";
import { randomRate } from "../../utils/randomRate";
const propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  className: PropTypes.string,
  rate: PropTypes.number,
  author: PropTypes.string,
  isRate: PropTypes.bool,
  isAuthor: PropTypes.bool,
  isReverse: PropTypes.bool,
};

const CardItemHorizontal = (props) => {
  const {
    title = "Title",
    imgSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    className = "",
    isRate = false,
    isAuthor = false,
    isReverse = false,
    rate = randomRate(),
    author = `By NamDo - ${randomDate()}`,
    href = "/noi-dung",
  } = props;
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className={`card-item-horizontal ${className}`}>
      <Link href={href}>
        <Card>
          <Row>
            {isReverse ? (
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
            ) : (
              <Col span={8}>
                <div className="card-item-horizontal-img">
                  <img src={imgSrc} alt={title} srcset="" />
                </div>
              </Col>
            )}
            {isReverse ? (
              <Col span={8}>
                <div className="card-item-horizontal-img">
                  <img src={imgSrc} alt={title} srcset="" />
                </div>
              </Col>
            ) : (
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
            )}
          </Row>
        </Card>
      </Link>
    </div>
  );
};

CardItemHorizontal.propTypes = propTypes;
export default CardItemHorizontal;
