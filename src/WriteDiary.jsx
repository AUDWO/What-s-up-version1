import styled from "styled-components";
import { useRef } from "react";

import MainSideNavCp from "./MainSideNavCp";

//imageIcon
import { AiFillPicture } from "react-icons/ai";

//plus
import { FaCirclePlus } from "react-icons/fa6";

const WriteDiary = () => {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto"; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  //joyful-development.tistory.com/36 [조이일보:티스토리]
  출처: https: return (
    <Container>
      <MainSideNavCp />
      <MainContents>
        <WriteContainer>
          <DiaryTitleInputSection>
            <DiaryTitleText>TITLE </DiaryTitleText>
            <DiaryTitleTextArea
              rows={1}
              onChange={handleResizeHeight}
              ref={textarea}
              placeholder="제목을 입력해주세요."
            >
              d
            </DiaryTitleTextArea>
          </DiaryTitleInputSection>
          <WriteContainer1Wrapper>
            <DiaryImgSelectSection>
              <DiaryImgToggleSelectWrapper>
                <DiaryImgToggleSelectText>사진 업로드</DiaryImgToggleSelectText>
                <DiaryImgToggleSelectButton></DiaryImgToggleSelectButton>
              </DiaryImgToggleSelectWrapper>
              <DiaryImgSelectButtonWrapper>
                <DiaryImgSelectButton>사진 선택</DiaryImgSelectButton>
              </DiaryImgSelectButtonWrapper>
              <DiarySelectImgWrapper>
                <DiarySelectImgIcon />
                <PlusIcon />
              </DiarySelectImgWrapper>
            </DiaryImgSelectSection>
            <DiaryPublicDetailsContainer>
              <DiaryPublicSelectWrapper>
                <DiaryPublicSelectText>일기 공개</DiaryPublicSelectText>
              </DiaryPublicSelectWrapper>
              <DiaryPublicDetailsTogglesWrapper>
                <DiaryPublicDetailsToggleWrapper>
                  <DiaryPublicDetailsText>
                    댓글 기능 해제
                  </DiaryPublicDetailsText>
                  <DiaryPublicDetailsToggleButton></DiaryPublicDetailsToggleButton>
                </DiaryPublicDetailsToggleWrapper>
                <DiaryPublicDetailsToggleWrapper>
                  <DiaryPublicDetailsText>
                    좋아요 기능 해제
                  </DiaryPublicDetailsText>
                  <DiaryPublicDetailsToggleButton></DiaryPublicDetailsToggleButton>
                </DiaryPublicDetailsToggleWrapper>
              </DiaryPublicDetailsTogglesWrapper>
            </DiaryPublicDetailsContainer>
          </WriteContainer1Wrapper>
        </WriteContainer>
        <WriteContainer>
          <DiaryContentTextWrapper>
            <DiaryContentText>Content</DiaryContentText>
          </DiaryContentTextWrapper>
          <DiaryContentInputContainer>
            <DiaryContentTextarea />
          </DiaryContentInputContainer>
          <MakeDiaryButtonsWrapper>
            <MakeDiaryButton>게시</MakeDiaryButton>
            <DeleteDiaryButton>삭제</DeleteDiaryButton>
          </MakeDiaryButtonsWrapper>
        </WriteContainer>
      </MainContents>
    </Container>
  );
};

export default WriteDiary;

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 985px) {
    flex-direction: column;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContents = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 985px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WriteContainer = styled.div`
  width: 420px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    width: 600px;
    height: auto;
  }
  @media screen and (max-width: 622px) {
    width: 500px;
    height: auto;
  }
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;

const WriteContainer1Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    flex-direction: row;
  }
  @media screen and (max-width: 623px) {
    flex-direction: column;
  }
`;

//------------------Diary Title----------------------
const DiaryTitleInputSection = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
`;

const DiaryTitleText = styled.div`
  font-size: 24px;
  color: #acacac;
  margin-bottom: 5px;
`;

const DiaryTitleTextArea = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  resize: none;
  font-size: 20px;
  border-top: 1px solid #c6c6c3;
  border-bottom: 1px solid #c6c6c3;
  padding-top: 17px;
  color: #acacac;
`;

//------------------Diary Title----------------------
const DiaryImgSelectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//-----------DiaryImg Toggle Select-----------------

const DiaryImgToggleSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
const DiaryImgToggleSelectText = styled.div`
  color: #acacac;
  display: flex;
  align-items: center;
`;

const DiaryImgToggleSelectButton = styled.div`
  width: 50px;
  height: 30px;
  background-color: orange;
`;

//-----------DiaryImg Toggle Select-----------------

//-----------Diary ImgSelect Button -------------------

const DiaryImgSelectButtonWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 50px;
  align-items: center;
  @media screen and (max-width: 520px) {
  }
`;

const DiaryImgSelectButton = styled.div`
  color: #c9c9c9;
  font-size: 18px;
  margin-left: 25px;
  cursor: pointer;
  background-color: #4199ff;
  font-size: 14px;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: white;
`;

//-----------Diary Select Button -------------------

const DiarySelectImgWrapper = styled.div`
  width: 320px;
  height: 300px;
  color: #4199ff;
  position: relative;
  @media screen and (max-width: 985px) {
    width: 200px;
    height: 200px;
  }
`;

const DiarySelectImgIcon = styled(AiFillPicture)`
  color: #4199ff;
  position: absolute;
  z-index: 9;
  top: 0;
  margin: 0;
  font-size: 300px;
  cursor: pointer;
  @media screen and (max-width: 985px) {
    font-size: 200px;
  }
`;

const PlusIcon = styled(FaCirclePlus)`
  color: #f7dd07;
  font-size: 60px;
  position: absolute;
  bottom: 10%;
  right: 4%;
  background-color: white;
  border-radius: 50%;
  z-index: 99;
  @media screen and (max-width: 985px) {
    font-size: 40px;
  }
`;

//----------------Public Toggle Select------------------

const DiaryPublicSelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const DiaryPublicSelectText = styled.div`
  color: #acacac;
`;

//----------------Public Toggle Select------------------

// ---------------Public details Select-----------------

const DiaryPublicDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    height: 300px;
  }
`;

const DiaryPublicDetailsTogglesWrapper = styled.div`
  width: 270px;
  height: 160px;
  border: 4px solid #4199ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  @media screen and (max-width: 985px) {
    width: 240px;
    margin-top: 10px;
  }
`;

const DiaryPublicDetailsToggleWrapper = styled.div`
  display: flex;
`;
const DiaryPublicDetailsText = styled.div`
  color: #acacac;
`;

const DiaryPublicDetailsToggleButton = styled.div``;

// ---------------Public details Select-----------------

//-----------------Diary Content-----------------------

const DiaryContentTextWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 4px;
`;

const DiaryContentText = styled.div`
  color: #acacac;
  font-size: 25px;
`;

const DiaryContentInputContainer = styled.div`
  width: 100%;
  border-top: 1px solid #c6c6c3;
  border-bottom: 1px solid #c6c6c3;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const DiaryContentTextarea = styled.textarea`
  width: 99%;
  border: none;
  resize: none;
  outline: none;
  height: 300px;
  font-size: 16px;
  color: #acacac;
`;

const MakeDiaryButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 985px) {
    margin-bottom: 70px;
  }
  @media screen and (max-width: 705px) {
    margin-bottom: 100px;
  }
`;

const MakeDiaryButton = styled.button`
  background-color: #4199ff;
  border: none;
  padding: 7px 20px 7px 20px;
  color: white;
  border-radius: 5px;
  margin-right: 40px;
`;

const DeleteDiaryButton = styled.button`
  background-color: #ed4956;
  border: none;
  padding: 7px 20px 7px 20px;
  color: white;
  border-radius: 5px;
  margin-left: 40px;
`;
