import React from "react";
import styled from "styled-components";
import { VscHeart } from "react-icons/vsc";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PostCommentCp = () => {
  return (
    <MorePostCommentContainer>
      <MoreProfileImgWrapper>
        <MoreProfileImg />
      </MoreProfileImgWrapper>
      <MorePostUserContentContainer>
        <MoreProfileName2>liverpool</MoreProfileName2>
        <MorePostUserContent>
          어느날의 퇴근길 풍경입니다:) 며칠 전에 같이 퇴근을 하는데, 앞에 타고
          계시는 부장님과 동호PD가 사이가 너~무 좋은게 아니겠어요??!!!❤️
          엄마미소를 지으며 보다가 부랴부랴 사진으로 남겨 놓았는데 사진으로는
          즐거웠던 분위기가 전달이 안되는거 같네요;; 허허허허 그렇지만!!!!
          퇴근길 공유 해 봅니다. 월요일 오후시간, 퇴근 생각이 간절하실 우리
          사원님들!!!! 이번한주도 함께 화이팅해요!!!!!!!!!!☺️✨
        </MorePostUserContent>
        <CommentContactWrapper>
          <CommentLikeText>좋요아요</CommentLikeText>
          <CommentLikeCountNumber>18</CommentLikeCountNumber>
          <ReplyCommentInputOpenButtom>답글 달기</ReplyCommentInputOpenButtom>
        </CommentContactWrapper>
        <ReplyCommentOpenWrapper>
          <ReplyCommentOpenIcon />
          <ReplyCommentOpenButton>답글 보기</ReplyCommentOpenButton>
        </ReplyCommentOpenWrapper>
      </MorePostUserContentContainer>
      <CommnetLikeIconWrapper>
        <CommentLikeIcon />
      </CommnetLikeIconWrapper>
    </MorePostCommentContainer>
  );
};

export default PostCommentCp;

const MoreProfileName2 = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
`;

const MoreProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const MoreProfileImgWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

const MorePostContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MorePostUserContentContainer = styled.div`
  min-height: 40px;
  margin-left: 10px;
  margin-top: 7px;
`;

const MorePostUserContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
`;

const MorePostCommentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ReplyCommentOpenWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

const ReplyCommentOpenButton = styled.button`
  font-size: 14px;
  color: #a4a4a4;
  padding-top: 3px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ReplyCommentOpenIcon = styled(BiSolidDownArrow)`
  color: #4199ff;
  font-size: 16px;
  margin-right: 5px;
`;

const CommnetLikeIconWrapper = styled.div`
  padding-top: 5px;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
`;
const CommentLikeIcon = styled(FaHeart)`
  font-size: 14px;
  color: #4199ff;
`;

const CommentContactWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`;

const CommentLikeText = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 2px;
`;

const CommentLikeCountNumber = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 20px;
`;

const ReplyCommentInputOpenButtom = styled.button`
  font-size: 13px;
  color: #a4a4a4;
  border: none;
  background: none;
  cursor: pointer;
`;

//--------postcomment------------------------
