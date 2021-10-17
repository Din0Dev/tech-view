import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { Avatar, Form, Comment, Button, List, Input } from "antd";

const propTypes = {};

const CommentCommon = (props) => {
  const [submmiting, setsubmmiting] = useState(false);
  const [comments, setcomments] = useState([]);
  const [values, setvalues] = useState("");
  //! State
  const dispatch = useDispatch();

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
  const ExampleComment = ({ children }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>NamDo</a>}
      avatar={<Avatar src="/static/assets/img/icon/avanho.png" alt="NamDo" />}
      content={<p>Chắc sẽ mua 1 chiếc</p>}
    >
      {children}
    </Comment>
  );
  //! Function
  const handleSubmit = () => {
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
    }, 100);
  };
  const handleChange = (e) => {
    setvalues(e.target.value);
  };
  //! Render
  return (
    <div className="comment-common">
      <Comment
        avatar={<Avatar src="/static/assets/img/icon/avanho.png" alt="NamDo" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={() => {handleSubmit()}}
            submitting={submmiting}
            value={values}
          />
        }
      />
      {comments.length > 0 && <CommentList comments={comments} />}
      {/*  */}
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
      ,
    </div>
  );
};

CommentCommon.propTypes = propTypes;
export default CommentCommon;
