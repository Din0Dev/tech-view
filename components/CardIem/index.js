import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ImageSrc: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.number,
  author: PropTypes.string,
};

const CardItem = (props) => {
  const {
    title = "TITLE",
    ImageSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    width = "100%",
    className = "",
    href = "/",
    author = "by NamDo",
  } = props;
  //! State

  //! Function

  //! Render
  return (
    <div className="CardItem-Custom">
      <Link href={href}>
        <Card
          hoverable
          className={className}
          style={{ width: width }}
          cover={<img alt={title} src={ImageSrc} />}
        >
          <Meta title={title} description={author} />
        </Card>
      </Link>
    </div>
  );
};

CardItem.propTypes = propTypes;
export default CardItem;
