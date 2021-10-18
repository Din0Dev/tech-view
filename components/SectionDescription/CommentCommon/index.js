import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { Avatar, Form, Comment, Button, List, Input } from "antd";
import router from "next/router";

const propTypes = {};

const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Bình Luận
      </Button>
    </Form.Item>
  </>
);
const CommentCommon = (props) => {
  //! State
  const [submmiting, setsubmmiting] = useState(false);
  const [comments, setcomments] = useState([]);
  const [values, setvalues] = useState("");
  const dispatch = useDispatch();

  const ExampleComment = ({
    children,
    content = "Chắc sẽ mua 1 chiếc",
    author = "NamDo",
  }) => (
    <Comment
      actions={[
        <span
          key="comment-nested-reply-to"
          onClick={() => {
            router.push("#editor");
          }}
        >
          Trả lời
        </span>,
      ]}
      author={<a>{author}</a>}
      avatar={<Avatar src="/static/assets/img/icon/avanho.png" alt="NamDo" />}
      content={<p>{content}</p>}
    >
      {children}
    </Comment>
  );
  //! Function
  const handleSubmit = (e) => {
    if (!values) {
      return;
    }
    setsubmmiting(true);
    setTimeout(() => {
      setsubmmiting(false);
      setvalues("");
      setcomments([
        ...comments,
        {
          author: "NamDo",
          avatar: "/static/assets/img/icon/avanho.png",
          content: <p>{values}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };
  const handleChange = (e) => {
    setvalues(e.target.value);
  };
  //! Render
  return (
    <div className="comment-common">
      <div id="editor">
        <Comment
          avatar={
            <Avatar src="/static/assets/img/icon/avanho.png" alt="NamDo" />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={() => {
                handleSubmit();
              }}
              submitting={submmiting}
              value={values}
            />
          }
        />
      </div>
      {comments.length > 0 && <CommentList comments={comments} />}
      {/*  */}
      <ExampleComment content="Bao lâu nữa bán được 1 tỉ gói mè ?">
        <ExampleComment author="Admin" content="Tôi bán kem đánh răng">
          <ExampleComment content="Trả lời!" />
          <ExampleComment author="Admin" content="Tôi bán kem đánh răng" />
        </ExampleComment>
      </ExampleComment>
      ,
    </div>
  );
};

CommentCommon.propTypes = propTypes;
export default CommentCommon;
