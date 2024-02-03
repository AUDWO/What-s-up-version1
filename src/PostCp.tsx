import styled from "styled-components";
import PostCommentsCp from "./PostCommentsCp";
//heartNotFill
import { FaRegHeart } from "react-icons/fa6";

//comment
import { FaRegComment } from "react-icons/fa";
const PostCp = () => {
  return (
    <PostContainer>
      <PostCommentsCp />
      <PostContentInfoContainer>
        <PostImg
          src={
            "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
          }
        />
        <PostContactInfoV2>
          <PostContactWrapper>
            <PostLikeIcon />
            <PostContactCountNumber>2</PostContactCountNumber>
          </PostContactWrapper>
          <PostContactWrapper>
            <PostCommentIcon />
            <PostContactCountNumber>2</PostContactCountNumber>
          </PostContactWrapper>
        </PostContactInfoV2>
        <PostContentContainer>
          <PostContentProfileName>myeon+jae</PostContentProfileName>
          <PostContent>wd d wd d w w w </PostContent>
        </PostContentContainer>
      </PostContentInfoContainer>
      <PostContactContainer>
        <PostContactWrapper>
          <PostLikeIcon />
          <PostContactCountNumber>2</PostContactCountNumber>
        </PostContactWrapper>
        <PostContactWrapper>
          <PostCommentIcon />
          <PostContactCountNumber>2</PostContactCountNumber>
        </PostContactWrapper>
      </PostContactContainer>
    </PostContainer>
  );
};

export default PostCp;

const PostsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 480px;
  height: 630px;
  margin-top: 100px;
  display: flex;
  @media screen and (max-width: 501px) {
    width: 100%;
    height: 100%;
  }
  position: relative;
`;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 501px) {
    width: 100%;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    position: relative;
    padding-bottom: 166.1%;
  }
`;
//------------------PostContact----------------------

const PostContactContainer = styled.div`
  width: 70px;
  height: 100%;
  @media screen and (max-width: 501px) {
    display: none;
  }
`;

const PostContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 10px;
  @media screen and (max-width: 501px) {
    margin-top: 0;
    margin-right: 10px;
  }
`;

const PostLikeIcon = styled(FaRegHeart)`
  padding: 0;
  font-size: 23px;
  margin-right: 10px;
`;

const PostCommentIcon = styled(FaRegComment)`
  padding: 0;
  font-size: 23px;
  margin-right: 10px;
`;

const PostContactCountNumber = styled.div`
  font-size: 14px;
`;

const PostContactInfoV2 = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid red;
  display: none;
  @media screen and (max-width: 501px) {
    display: flex;
    algin-items: center;
    width: 420px;
    border: 3px solid #f7dd07;
    border-bottom: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
    position: absolute;
    bottom: 9.5%;
    left: 0;
  }
`;
//------------------PostContact----------------------

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  object-fit: cover;
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 81%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const PostContentContainer = styled.div`
  width: 100%;
  height: 50px;

  background-color: white;
  border: 3px solid #f7dd07;
  display: flex;
  algin-items: center;

  @media screen and (max-width: 501px) {
    width: 420px;
    border-top: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const PostContentProfileName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;
`;

const PostContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
