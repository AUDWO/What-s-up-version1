import React from "react";
import styled from "styled-components";
import MainSideNavCp from "./MainSideNavCp";

//clock
import { FcClock } from "react-icons/fc";

//trend
import { FcPositiveDynamic } from "react-icons/fc";

const Diary = () => {
  return (
    <Container>
      <MainSideNavCp />
      <MainContentsContainer>
        <DiaryFilterContainer>
          <DiaryFilterWrapper>
            <TrendingIcon />
            <DiaryFilterTitle>트렌디</DiaryFilterTitle>
          </DiaryFilterWrapper>
          <DiaryFilterWrapper>
            <LatestIcon />
            <DiaryFilterTitle>최신</DiaryFilterTitle>
          </DiaryFilterWrapper>
        </DiaryFilterContainer>
        <DiaryContentsContainer>
          <Box>
            <BoxContentContainer>
              <DiaryContentImg
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SV100408.JPG/1200px-SV100408.JPG"
                }
              />
              <DiaryContentInfoContainer>
                <DiaryContentInfoWrapper>
                  <DiaryTitle>우리들은 엔지니어이다.</DiaryTitle>
                  <DiaryInfoWrapper>
                    <DiaryContentCreatedAt>
                      2024년 2월 21일
                    </DiaryContentCreatedAt>
                    <DiaryCommentCountTitle>14개의 댓글</DiaryCommentCountTitle>
                  </DiaryInfoWrapper>
                </DiaryContentInfoWrapper>
                <DiaryContentProfileWrapper>
                  <DiaryContentProfileImg />
                  <DiaryContentProfileName>peter_09</DiaryContentProfileName>
                </DiaryContentProfileWrapper>
              </DiaryContentInfoContainer>
            </BoxContentContainer>
          </Box>
          <Box>
            <BoxContentContainer>
              <DiaryContentImg
                src={
                  "https://rokaf.airforce.mil.kr/sites/airforce/images/weaponsystems/1-1-1(F-35A).jpg"
                }
              />
            </BoxContentContainer>
          </Box>
          <Box>
            <BoxContentContainer></BoxContentContainer>
          </Box>
          <Box>
            <BoxContentContainer></BoxContentContainer>
          </Box>
          <Box>
            <BoxContentContainer></BoxContentContainer>
          </Box>
          <Box>
            <BoxContentContainer></BoxContentContainer>
          </Box>
        </DiaryContentsContainer>
      </MainContentsContainer>
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 40px;
  grid-gap: 30px;
  @media screen and (max-width: 1200px) {
  }
`;

const DiaryFilterContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const DiaryFilterTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #acacac;
`;

const TrendingIcon = styled(FcPositiveDynamic)`
  font-size: 20px;
  margin-right: 5px;
`;

const LatestIcon = styled(FcClock)`
  font-size: 20px;
  margin-right: 5px;
`;

const DiaryFilterWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    background-color: #f0f3f5;
    border-radius: 10px;
  }
  padding: 7px 15px 7px 15px;
`;
const DiaryContentsContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  grid-gap: 30px;
`;
const Box = styled.div`
  background-color: orange;
  padding-bottom: 120%;
  position: relative;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
`;

const BoxContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: white;
`;

const DiaryContentImg = styled.img`
  width: 100%;
  height: 60%;
  background-color: black;
  object-fit: cover;
  object-position: 50% 20%;
`;

const DiaryContentInfoContainer = styled.div`
  width: 100%;
  height: 40%;
`;

const DiaryContentInfoWrapper = styled.div`
  height: 55%;
  border-bottom: 1px solid #f0f3f5;
`;

const DiaryContentCreatedAt = styled.div`
  font-size: 14px;
  color: #a2a9ae;
  margin-bottom: 30px;
  padding: 0px 8px;
  margin-right: 5px;
`;
const DiaryContentCommentCountWrapper = styled.div`
  display: flex;
`;

const DiaryCommentCountTitle = styled.div`
  font-size: 14px;
  color: #a2a9ae;
`;

const DiaryInfoWrapper = styled.div`
  display: flex;
`;
const DiaryTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 0px 8px;
  margin-top: 20px;
`;

const DiaryContentProfileWrapper = styled.div`
  height: 29%;
  display: flex;
  align-items: center;
  padding: 4px 8px;
`;

const DiaryContentProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const DiaryContentProfileName = styled.div``;
