import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Pagination, Row } from "antd";
import router from "next/router";

const propTypes = {};

const PaginationCommon = (props) => {
  //! State
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  //! Function
  const onChange = (page) => {
    router.push("/xem-them");
  };
  //! Render
  return (
    <div className="pagination-common">
      <Row>
        <Col>
          <Pagination current={current} onChange={onChange} total={50} />
        </Col>
      </Row>
    </div>
  );
};

PaginationCommon.propTypes = propTypes;
export default PaginationCommon;
