import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import { Col, Row } from "antd";
import CardItemTopTrending from "components/CardItemTopTrending";

const propTypes = {};

const SectionTrending = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-trending-custom">
      <Title label="Trending" />
      <Row className="section-trending-custom-top" gutter={17}>
        <Col className="gutter-row" span={8}>
          <CardItemTopTrending
            topLabel="#1"
            title="Trải nghiệm app PC-COVID mới, đã có trên iOS và Android"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <CardItemTopTrending
            topLabel="#2"
            title="Trải nghiệm app PC-COVID mới, đã có trên iOS và Android"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <CardItemTopTrending
            topLabel="#3"
            title="Trải nghiệm app PC-COVID mới, đã có trên iOS và Android"
          />
        </Col>
      </Row>
      {/*  */}
      <Row className="section-trending-custom-bottom" gutter={17}>
        <Col className="gutter-row" span={8}>
          <CardItemTopTrending
            topLabel="#4"
            title="Trải nghiệm app PC-COVID mới, đã có trên iOS và Android"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <CardItemTopTrending
            topLabel="#5"
            title="Trải nghiệm app PC-COVID mới, đã có trên iOS và Android"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <CardItemTopTrending
            topLabel="#6"
            title="Trải nghiệm app PC-COVID mới, đã có trên iOS và Android"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionTrending.propTypes = propTypes;
export default SectionTrending;
