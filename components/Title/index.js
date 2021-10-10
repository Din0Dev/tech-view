import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
}

const Title = (props) => {
  const {
    label = "Title",
  } = props
  //! State

  //! Function

  //! Render
  return (
      <div className="title-custom">
        <p>{label}</p>
      </div>
    )
}

Title.propTypes = propTypes;
export default Title;