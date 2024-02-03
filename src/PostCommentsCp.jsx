import React from "react";
import styled from "styled-components";
import PostCommentCp from "./PostCommentCp";

const PostCommentsCp = () => {
  return (
    <PostCommentsBackground>
      <PostCommentsContainer>
        <PostContentInfoContainer></PostContentInfoContainer>
        <PostCommentsWrapper>
          <PostCommentCp />
          <PostCommentCp />
          <PostCommentCp />
          <PostCommentCp />
          <PostCommentCp />
        </PostCommentsWrapper>
      </PostCommentsContainer>
    </PostCommentsBackground>
  );
};

export default PostCommentsCp;

const PostCommentsBackground = styled.div`
  border: 3px solid red;
  background-color: rgba(0, 0, 0, 0.3);
  width: 419px;
  height: 570px;
  position: absolute;
  top: 0;
  padding-top: 50px;
  display: none;
  @media screen and (max-width: 501px) {
    width: 100%;
  }
`;

const PostCommentsContainer = styled.div`
  width: 100%;
  height: 515px;
  background-color: white;
  border: 1px solid white;
`;

const PostCommentsWrapper = styled.div`
  height: 430px;
  overflow: auto;
  padding-left: 20px;
`;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid red;
`;

const PostContentProfileContainer = styled.div``;

const PostContentProfileImg = styled.img`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
`;

const PostContentProfileName = styled.div``;

//--------postcomment------------------------
