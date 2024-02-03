import styled from "styled-components";
import MainSideNavCp from "./MainSideNavCp";
import { Pencil } from "./Pencil";

const ProfilePage = () => {
  return (
    <Container>
      <MainSideNavCp />
      <ContentsContainer>
        <MainContents>
          <ProfileContainer>
            <ProfileImgContainer>
              <ProfileImg
                src={
                  "https://i.pinimg.com/564x/93/b2/19/93b219cafc20b93743045ea518192238.jpg"
                }
              />
            </ProfileImgContainer>
            <ProfileInfoContainer>
              <ProfileInfoContentsContainer>
                <ProfileNameWrapper>
                  <ProfileName>Peter_09</ProfileName>
                  <FollowButton>팔로우</FollowButton>
                </ProfileNameWrapper>
                <ProfileRealName>peter</ProfileRealName>
                <ProfileIntroductionContainer>
                  <ProfileIntroduction>
                    Real Madrid.🤍 @AdidasFootball Athlete. Twitter:
                    BellinghamJude Real Madrid.🤍 @AdidasFootball Athlete.
                    Twitter: BellinghamJude
                  </ProfileIntroduction>
                </ProfileIntroductionContainer>
                <Joined>Joined 2022-09-19</Joined>
                <FollowInfoWrapper>
                  <FollowWrapper>
                    <FollowTitle>팔로우</FollowTitle>
                    <FollowrCountNumber>1299</FollowrCountNumber>
                  </FollowWrapper>
                  <FollowWrapper>
                    <FollowTitle>팔로우</FollowTitle>
                    <FollowrCountNumber>1299</FollowrCountNumber>
                  </FollowWrapper>
                </FollowInfoWrapper>
              </ProfileInfoContentsContainer>
            </ProfileInfoContainer>
          </ProfileContainer>
          <ProfileContentsTypeContainer>
            <ProfileTypeSelectContainer>
              <ProfileTypeContainer>
                <ProfileTypeTitle>게시물</ProfileTypeTitle>
                <ProfileContentCountNumber>7</ProfileContentCountNumber>
              </ProfileTypeContainer>
              <ProfileTypeContainer>
                <ProfileTypeTitle>일기</ProfileTypeTitle>
                <ProfileContentCountNumber>7</ProfileContentCountNumber>
              </ProfileTypeContainer>
            </ProfileTypeSelectContainer>
          </ProfileContentsTypeContainer>
          <ProfileContentsContainer>
            <ProfileContentContainer>
              <ProfileContent>a</ProfileContent>
            </ProfileContentContainer>
            <ProfileContentContainer></ProfileContentContainer>
          </ProfileContentsContainer>
        </MainContents>
      </ContentsContainer>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 705px) {
    padding: 0;
  }
`;

const MainContents = styled.div`
  width: 935px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 50px;
  padding-top: 50px;
  @media screen and (max-width: 935px) {
    width: 100%;
  }
`;

//----profile---------------------------
const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  padding-right: 60px;
  display: flex;
  @media screen and (max-width: 846px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media screen and (max-width: 705px) {
  }
`;

const ProfileImgContainer = styled.div`
  width: 170px;
  height: 170px;
  margin-top: 30px;
  margin-left: 30px;
  @media screen and (max-width: 846px) {
    width: 460px;
    margin-left: 0;
  }
  @media screen and (max-width: 464px) {
    height: 110px;
    width: 100%;
  }
`;

const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  @media screen and (max-width: 846px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileInfoContainer = styled.div`
  width: 80%;
  height: 300px;
  padding-left: 80px;
  @media screen and (max-width: 846px) {
    width: 460px;
    padding: 0;
  }
  @media screen and (max-width: 464px) {
    width: 100%;
  }
`;
//--------------profileContent-----------------
const ProfileInfoContentsContainer = styled.div`
  width: 460px;
  height: 100%;
  @media screen and (max-width: 464px) {
    width: 100%;
  }
`;

const ProfileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FollowButton = styled.button`
  border: none;
  background-color: #4199ff;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  padding: 8px 15px 8px 15px;
`;

const ProfileName = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-right: 50px;
`;

const ProfileIntroductionContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProfileIntroduction = styled.div`
  line-height: 150%;
`;

const ProfileRealName = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 17px;
`;

const Joined = styled.div`
  margin-bottom: 20px;
`;

const FollowInfoWrapper = styled.div`
  display: flex;
`;
const FollowWrapper = styled.div`
  display: flex;
  margin-right: 30px;
`;
const FollowTitle = styled.div`
  margin-right: 5px;
`;

const FollowrCountNumber = styled.div`
  font-weight: 600;
`;

//--------------profileContent-----------------

//--------------profileContentType--------------

const ProfileContentsTypeContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileTypeSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const ProfileTypeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  border-bottom: 2px solid black;
`;

const ProfileTypeTitle = styled.div``;

const ProfileContentCountNumber = styled.div``;

//--------------profileContentType--------------

//----profile---------------------------

//----profile - contents---------------------------
const ProfileContentsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const ProfileContentContainer = styled.div`
  background-color: orange;
  padding-bottom: 100%;
  position: relative;
`;

const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
`;

//----profile - contents---------------------------
const MainSideNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 270px;
  height: 100vh;
  background-color: gray;
  position: fixed;
  left: 0;
  z-index: 999;

  @media screen and (max-width: 1200px) {
    width: 100px;
  }

  @media screen and (max-width: 705px) {
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    width: 100%;
    height: 60px;
  }
`;
