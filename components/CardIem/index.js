import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Card, Rate } from "antd";
import Meta from "antd/lib/card/Meta";

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ImageSrc: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.number,
  author: PropTypes.string,
  isRate: PropTypes.bool,
};

const CardItem = (props) => {
  const {
    title = "TITLE",
    ImageSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    width = "100%",
    className = "",
    href = "/noi-dung",
    author = "by NamDo",
    isRate = false,
    rate = 5,
  } = props;
  //! State

  //! Function
  //! Render
  return (
    <div className="CardItem-Custom">
      <Link href={href}>
        <Card
          
          className={className}
          style={{ width: width }}
          cover={<img alt={title} src={ImageSrc} />}
        >
          <Meta title={title} description={author} />
          {isRate && (
            <Rate
              className="CardItem-Cutom-Rate"
              disabled
              defaultValue={rate}
            />
          )}
        </Card>
      </Link>
    </div>
  );
};

CardItem.propTypes = propTypes;
export default CardItem;
