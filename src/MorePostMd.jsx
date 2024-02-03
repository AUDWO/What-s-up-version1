import styled from "styled-components";
import { useRef } from "react";

//아래 방향 화살표
import { BiSolidDownArrow } from "react-icons/bi";

//하트
import { VscHeart } from "react-icons/vsc";

const MorePostMd = () => {
  const textarea = useRef();
  const handleResizeHeight = () => {
    // const textAreaHeightNumber = parseInt(textarea.current.style.height, 10);
    //console.log(textAreaHeightNumber);

    textarea.current.style.height = "auto"; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  //joyful-development.tistory.com/36 [조이일보:티스토리]
  출처: https: return (
    <MorePostBackground>
      <MorePostContainer>
        <MorePostImg
          src={
            "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
          }
        />
        <MorePostInfoContainer>
          <MorePostProfileContainer>
            <MorePostProfileWrapper>
              <MoreProfileImg />
              <MoreProfileName>Liverpool</MoreProfileName>
            </MorePostProfileWrapper>
          </MorePostProfileContainer>
          <MorePostContentContainer>
            <MoreProfileImgWrapper>
              <MoreProfileImg />
            </MoreProfileImgWrapper>

            <MorePostUserContentContainer>
              <MoreProfileName2>liverpool</MoreProfileName2>
              <MorePostUserContent>
                안녕하십니까 안녕하십니까wdwdwwdwddwdwdwdw
              </MorePostUserContent>
            </MorePostUserContentContainer>
          </MorePostContentContainer>

          <MorePostCommentsContainer>
            <MorePostCommentContainer>
              <MoreProfileImgWrapper>
                <MoreProfileImg />
              </MoreProfileImgWrapper>
              <MorePostUserContentContainer>
                <MoreProfileName2>liverpool</MoreProfileName2>
                <MorePostUserContent>
                  안녕하십니까 안녕하십니까dwdwwdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                  안녕하십니까 안녕하십니까wdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                  안녕하십니까 안녕하십니까wdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                </MorePostUserContent>
                <CommentContactWrapper>
                  <CommentLikeText>좋요아요</CommentLikeText>
                  <CommentLikeCountNumber>18</CommentLikeCountNumber>
                  <ReplyCommentInputOpenButtom>
                    답글 달기
                  </ReplyCommentInputOpenButtom>
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

            <MorePostCommentContainer>
              <MoreProfileImgWrapper>
                <MoreProfileImg />
              </MoreProfileImgWrapper>
              <MorePostUserContentContainer>
                <MoreProfileName2>liverpool</MoreProfileName2>
                <MorePostUserContent>
                  안녕하십니까 안녕하십니까dwdwwdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                  안녕하십니까 안녕하십니까wdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                  안녕하십니까 안녕하십니까wdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                </MorePostUserContent>
                <CommentContactWrapper>
                  <CommentLikeText>좋요아요</CommentLikeText>
                  <CommentLikeCountNumber>18</CommentLikeCountNumber>
                  <ReplyCommentInputOpenButtom>
                    답글 달기
                  </ReplyCommentInputOpenButtom>
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

            <MorePostCommentContainer>
              <MoreProfileImgWrapper>
                <MoreProfileImg />
              </MoreProfileImgWrapper>
              <MorePostUserContentContainer>
                <MoreProfileName2>liverpool</MoreProfileName2>
                <MorePostUserContent>
                  안녕하십니까 안녕하십니까dwdwwdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                  안녕하십니까 안녕하십니까wdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                  안녕하십니까 안녕하십니까wdwdwwdwdddwdwdwdwdwdwdwdwdwdwd
                </MorePostUserContent>
                <CommentContactWrapper>
                  <CommentLikeText>좋요아요</CommentLikeText>
                  <CommentLikeCountNumber>18</CommentLikeCountNumber>
                  <ReplyCommentInputOpenButtom>
                    답글 달기
                  </ReplyCommentInputOpenButtom>
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
          </MorePostCommentsContainer>
          <CommentInputContainer>
            <CommentTextarea ref={textarea} onChange={handleResizeHeight} />
            <CommentInputButton>게시</CommentInputButton>
          </CommentInputContainer>
        </MorePostInfoContainer>
      </MorePostContainer>
    </MorePostBackground>
  );
};

export default MorePostMd;

const MorePostBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  @media screen and (max-width: 801px) {
    display: none;
  }
`;

const MorePostContainer = styled.div`
  width: 800px;
  height: 580px;
  position: absolute;
  z-index: 99999999;
  background-color: white;
  opacity: 1;
  display: flex;
  position: relative;
`;

const MorePostImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const MorePostInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const MorePostProfileContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e7e7e6;

  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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

const MorePostProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MoreProfileName = styled.div``;

const MoreProfileName2 = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
`;

const MorePostCommentsContainer = styled.div`
  align-items: center;
  padding-left: 20px;
  padding-bottom: 20px;
  overflow: auto;
  height: 360px;
  ::-webkit-scrollbar {
    display: none;
  }
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
const CommentLikeIcon = styled(VscHeart)`
  font-size: 17px;
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
//--------------commentInput------------------

const CommentInputContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  min-height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  align-items: center;
  padding-top: 10px;
`;

const CommentInputButton = styled.button`
  background-color: white;
  border: none;
  color: #4199ff;
  font-weight: 700;
  cursor: pointer;
`;

const CommentTextarea = styled.textarea`
  width: 83%;
  outline: none;
  border: none;
  padding-left: 20px;
  resize: none;
`;

//--------------commentInput------------------
