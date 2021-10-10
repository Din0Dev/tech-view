import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ReadMore from "components/Icon/ReadMore";
import { Card, Col, Row } from "antd";
import CardItem from "components/CardIem";
import CardItemHorizontal from "components/CardItemHorizontal";

const propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  titleCenter: PropTypes.string,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  imgsrcCenter: PropTypes.string,
  imgsrcLeft: PropTypes.string,
  imgsrcRight: PropTypes.string,
};

const ItemSection = (props) => {
  const {
    width = "100%",
    title = "Title",
    titleCenter = "Title - Center",
    titleLeft = "Title - Left",
    titleRight = "Title - Right",
    imgsrcCenter = "",
    imgsrcLeft = "",
    imgsrcRight = "",
  } = props;
  //! State
  const dispatch = useDispatch();

  //! Function
  //! Render
  return (
    <div className="item-section">
      <Card
        title={title}
        bordered={false}
        style={{ width: width }}
        actions={[<ReadMore />]}
      >
        <Row gutter={30}>
          <Col span={24}>
            <CardItem
              className="item-section-center"
              title={titleCenter}
              author=""
              ImageSrc={imgsrcCenter}
            />
          </Col>
          <Col span={24}>
            <CardItemHorizontal
              className="item-section-left"
              title={titleLeft}
              author=""
              imgSrc={imgsrcLeft}
            />
          </Col>
          <Col span={24}>
            <CardItemHorizontal
              className="item-section-right"
              title={titleRight}
              author=""
              imgSrc={imgsrcRight}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

ItemSection.propTypes = propTypes;
export default ItemSection;
