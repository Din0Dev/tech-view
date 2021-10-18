import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import { BarsOutlined, HistoryOutlined, UserOutlined } from "@ant-design/icons";
import TabInfomation from "../TabInfomation";
import TabActivity from "../TabActivity";
import TabOptions from "../TabOptions";

const propTypes = {};

const ContainerInfomation = (props) => {
  //! State
  const { TabPane } = Tabs;
  //! Function
  const titleInfomation = (
    <span>
      <UserOutlined /> Thông tin cá nhân
    </span>
  );
  const titleActivity = (
    <span>
      <HistoryOutlined /> Hoạt động gần đây
    </span>
  );
  const titleOptions = (
    <span>
      <BarsOutlined /> Tùy chọn
    </span>
  );
  //! Render
  return (
    <div className="container-infomation">
      <Tabs tabPosition={"left"}>
        <TabPane tab={titleInfomation} key="1">
          <TabInfomation />
        </TabPane>
        <TabPane tab={titleActivity} key="2">
          <TabActivity />
        </TabPane>
        <TabPane tab={titleOptions} key="3">
          <TabOptions />
        </TabPane>
      </Tabs>
    </div>
  );
};

ContainerInfomation.propTypes = propTypes;
export default ContainerInfomation;
