import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CheckableTag from "antd/lib/tag/CheckableTag";

const propTypes = {};

const CheckableTagCommon = (props) => {
  //! State

  const [selectedTags, setSelectedTags] = useState(["#Google Pixel"]);
  const dispatch = useDispatch();
  const tagsData = ["#Goole Pixel 6", "#iphone13", "#Window11", "#AppleEvent"];

  //! Function
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  //! Render
  return (
    <div className="checkable-tag">
      <span
        style={{
          marginRight: 8,
          color: "#004989",
          fontWeight: "bold",
        }}
      >
        Trending:
      </span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
};

CheckableTagCommon.propTypes = propTypes;
export default CheckableTagCommon;
