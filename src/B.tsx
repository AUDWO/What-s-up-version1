import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import ChildCp1 from "./ChildCp1";
//CheckUserIcon
import { IoSettingsOutline } from "react-icons/io5";

//Logout
import { IoLogOutOutline } from "react-icons/io5";

//profile
import { FcReading } from "react-icons/fc";

//home
import { FcHome } from "react-icons/fc";

//search
import { FcSearch } from "react-icons/fc";

//makePost
import { FcAddImage } from "react-icons/fc";

//makeDiary
import { FcAddDatabase } from "react-icons/fc";

//Diary
import { FcDatabase } from "react-icons/fc";

//Punch
import { GiPunchBlast } from "react-icons/gi";

//smile
import { BsFillEmojiSmileFill } from "react-icons/bs";

//MorePostClose
import { IoCloseSharp } from "react-icons/io5";

//heartNotFill
import { FaRegHeart } from "react-icons/fa6";

//comment
import { FaRegComment } from "react-icons/fa";
import PostCommentsCp from "./PostCommentsCp";

const B = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header>
        <HeaderIconWrapper>
          <SmileIcon2 />
        </HeaderIconWrapper>
        <HeaderTitle>WHAT'S UP</HeaderTitle>
      </Header>
      <Container>
        <MainSideNav>
          <MainSideNavContent>
            <MainIconWrapper>
              <SmileIcon />
            </MainIconWrapper>
            <MainTitleWrapper>
              <MainTilteLetter>W</MainTilteLetter>
              <MainTilteLetter>H</MainTilteLetter>
              <MainTilteLetter>A</MainTilteLetter>
              <MainTilteLetter>T</MainTilteLetter>
              <MainTilteLetter2>'</MainTilteLetter2>
              <MainTilteLetter>S</MainTilteLetter>
              <MainTilteSpaceLetter></MainTilteSpaceLetter>
              <MainTilteLetter>U</MainTilteLetter>
              <MainTilteLetter>P</MainTilteLetter>
            </MainTitleWrapper>
            <MainSideNavMenuList>
              <MainSideNavMenuWrapper>
                <HomeIcon />
                <MainSideNavMenuTitle>홈</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
              <MainSideNavMenuWrapper>
                <SearchIcon />
                <MainSideNavMenuTitle>검색</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
              <MainSideNavMenuWrapper>
                <MakePostIcon />
                <MainSideNavMenuTitle>만들기</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
              <MainSideNavMenuWrapper>
                <DiaryIcon />
                <MainSideNavMenuTitle>일기</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
              <MainSideNavMenuWrapper>
                <MakeDiaryIcon />
                <MainSideNavMenuTitle>일기 쓰기</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
              <MainSideNavMenuWrapper>
                <ProfileIcon />
                <MainSideNavMenuTitle>프로필</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
              <MainSideNavMenuWrapper>
                <MakeDiaryIcon />
                <MainSideNavMenuTitle>더 보기</MainSideNavMenuTitle>
              </MainSideNavMenuWrapper>
            </MainSideNavMenuList>
          </MainSideNavContent>
        </MainSideNav>
        <MainContentsContainer>
          <StoryContainer>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
            <Story>
              <StoryImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <StoryProfileContainer>
                <StoryProfileImg />
                <StoryProfileName>peterwdwd</StoryProfileName>
              </StoryProfileContainer>
            </Story>
          </StoryContainer>
          <PostsContainer>
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
            <PostContainer>
              <PostContentInfoContainer>
                <PostImg></PostImg>
                <PostContactInfoV2></PostContactInfoV2>
                <PostContentContainer></PostContentContainer>
              </PostContentInfoContainer>
              <PostContactContainer></PostContactContainer>
            </PostContainer>
            <PostContainer>
              <PostContentInfoContainer>
                <PostImg></PostImg>
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
                <PostContentContainer></PostContentContainer>
              </PostContentInfoContainer>
              <PostContactContainer></PostContactContainer>
            </PostContainer>
            <PostContainer>
              <PostContentInfoContainer>
                <PostImg
                  src={
                    "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                  }
                />
                <PostContactInfoV2></PostContactInfoV2>
                <PostContentContainer>
                  <PostContentProfileName>myeon+jae</PostContentProfileName>
                </PostContentContainer>
              </PostContentInfoContainer>
              <PostContactContainer>
                <PostContactWrapper>
                  <PostLikeIcon />
                  <PostContactCountNumber>2</PostContactCountNumber>
                </PostContactWrapper>
              </PostContactContainer>
            </PostContainer>
          </PostsContainer>
          <MainSideNav2>
            <CheckUserContainer>
              <CheckUserProfileContainer>
                <CheckUserProfileImg />
                <CheckUserProfileName>peter</CheckUserProfileName>
              </CheckUserProfileContainer>
              <CheckUserContentContainer>
                <ContentsCountWrapper>
                  <PostCountTitle>게시물</PostCountTitle>
                  <PostCountNumber>0</PostCountNumber>
                </ContentsCountWrapper>
                <ContentsCountWrapper>
                  <DiaryCountTitle>일기 -</DiaryCountTitle>
                  <DiaryCountNumber>0</DiaryCountNumber>
                </ContentsCountWrapper>
              </CheckUserContentContainer>
              <CheckUserContentContainer>
                <CheckUserProfiletSettingWrapper>
                  <SettingIcon />
                  <SettingTitle>프로필 설정</SettingTitle>
                </CheckUserProfiletSettingWrapper>
                <LogoutWrapper>
                  <LogoutIcon />
                  <LogoutTitle>로그아웃</LogoutTitle>
                </LogoutWrapper>
              </CheckUserContentContainer>
            </CheckUserContainer>
            <RecommendContainer>
              <RecommendTitle>추천 유저</RecommendTitle>
              <RecommendUserList>
                <RecommendUserContainer>
                  <RecommendUserInfoWrapper>
                    <RecommendUserImg />
                    <RecommendUserName>Jaems_0_0_0</RecommendUserName>
                  </RecommendUserInfoWrapper>
                  <RecommendUserFollowButton>팔로우</RecommendUserFollowButton>
                </RecommendUserContainer>
                <RecommendUserContainer>
                  <RecommendUserInfoWrapper>
                    <RecommendUserImg />
                    <RecommendUserName>Jaems_0_0_0</RecommendUserName>
                  </RecommendUserInfoWrapper>
                  <RecommendUserFollowButton>팔로우</RecommendUserFollowButton>
                </RecommendUserContainer>
                <RecommendUserContainer>
                  <RecommendUserInfoWrapper>
                    <RecommendUserImg />
                    <RecommendUserName>Jaems_0_0_0</RecommendUserName>
                  </RecommendUserInfoWrapper>
                  <RecommendUserFollowButton>팔로우</RecommendUserFollowButton>
                </RecommendUserContainer>
                <RecommendUserContainer>
                  <RecommendUserInfoWrapper>
                    <RecommendUserImg />
                    <RecommendUserName>Jaems_0_0_0</RecommendUserName>
                  </RecommendUserInfoWrapper>
                  <RecommendUserFollowButton>팔로우</RecommendUserFollowButton>
                </RecommendUserContainer>
                <RecommendUserContainer>
                  <RecommendUserInfoWrapper>
                    <RecommendUserImg />
                    <RecommendUserName>Jaems_0_0_0</RecommendUserName>
                  </RecommendUserInfoWrapper>
                  <RecommendUserFollowButton>팔로우</RecommendUserFollowButton>
                </RecommendUserContainer>
              </RecommendUserList>
            </RecommendContainer>
          </MainSideNav2>
        </MainContentsContainer>
      </Container>
    </div>
  );
};

export default B;

const Container = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 1019px) {
    justify-content: center;
  }

  @media screen and (max-width: 799px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 705px) {
    justify-content: center;
  }
`;

const Header = styled.header`
  display: none;
  @media screen and (max-width: 501px) {
    position: fixed;
    z-index: 9999;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: white;
  }
`;
const HeaderIconWrapper = styled.div``;
const HeaderTitle = styled.div`
  font-family: Orbitron;
  font-size: 25px;
  color: #f7dd07;
  margin-left: 10px;
`;
const SmileIcon2 = styled(BsFillEmojiSmileFill)`
  font-size: 30px;
  color: #f7dd07;
  border-radius: 50%;
  background-color: #4099ff;
  margin-left: 20px;
`;

//--------------------MainSideNab-----------------------
const MainSideNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 270px;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 999;
  border-right: 1px solid #e9e9e9;

  @media screen and (max-width: 1200px) {
    width: 100px;
  }

  @media screen and (max-width: 705px) {
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    width: 100vw;
    height: 50px;
    display: block;
  }
`;
const MainSideNavContent = styled.div`
  width: 270px;
  @media screen and (max-width: 1200px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 705px) {
    flex-direction: row;
    bottom: 0%;
    width: 100vw;
    height: 100%;
    background-color: white;
  }
`;

const MainTitleWrapper = styled.div`
  display: flex;
  margin-left: 50px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const MainTilteLetter = styled.div`
  font-family: Orbitron;
  font-size: 28px;
  color: #f7dd07;
`;
const MainTilteLetter2 = styled.div`
  font-family: Orbitron;
  font-size: 28px;
  color: #4099ff;
`;
const MainTilteSpaceLetter = styled.div`
  width: 10px;
`;

const MainSideNavMenuList = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-left: 50px;
  @media screen and (max-width: 1200px) {
    margin: 0;
  }
  @media screen and (max-width: 705px) {
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
`;

const MainSideNavMenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 40px;
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    &:hover {
      background-color: #edebeb;
      border-radius: 12px;
    }
  }
  @media screen and (max-width: 705px) {
    margin: 0;
  }
`;

const MainSideNavMenuTitle = styled.div`
  margin-left: 15px;
  font-size: 14px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const PunchIcon = styled(GiPunchBlast)`
  margin-top: 40px;
  font-size: 40px;
`;

const MainIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 705px) {
    display: none;
  }
`;
const SmileIcon = styled(BsFillEmojiSmileFill)`
  margin-top: 40px;
  font-size: 50px;
  color: #f7dd07;
  border-radius: 50%;
  background-color: #4099ff;
  margin-bottom: 30px;
`;

const HomeIcon = styled(FcHome)`
  font-size: 30px;
`;
const DiaryIcon = styled(FcDatabase)`
  font-size: 30px;
`;

const MakeDiaryIcon = styled(FcAddDatabase)`
  font-size: 30px;
`;

const MakePostIcon = styled(FcAddImage)`
  font-size: 30px;
`;

const SearchIcon = styled(FcSearch)`
  font-size: 30px;
`;

const ProfileIcon = styled(FcReading)`
  font-size: 30px;
`;

//--------------------MainSideNab--------------

//--------------CheckUser----------------------
const MainSideNav2 = styled.nav`
  width: 320px;
  height: 100vh;
  position: absolute;
  right: 0;
  padding-left: 20px;
  @media screen and (max-width: 1019px) {
    display: none;
  }
`;

const CheckUserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckUserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
`;

const CheckUserProfileName = styled.div`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 900;
`;

const CheckUserContainer = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  padding-top: 10px;

  margin-top: 30px;
  margin-bottom: 70px;
`;

const CheckUserContentContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const ContentsCountWrapper = styled.div`
  display: flex;
  margin-right: 40px;
`;

const PostCountTitle = styled.div`
  margin-right: 7px;
`;

const PostCountNumber = styled.div``;

const DiaryCountTitle = styled.div`
  margin-right: 7px;
`;

const DiaryCountNumber = styled.div``;

const SettingIcon = styled(IoSettingsOutline)`
  color: #bcb8b8;
  margin-right: 5px;
`;

const SettingTitle = styled.div`
  color: #bcb8b8;
`;

const CheckUserProfiletSettingWrapper = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LogoutWrapper = styled.div`
  display: flex;
`;

const LogoutIcon = styled(IoLogOutOutline)`
  color: #bcb8b8;
  margin-right: 5px;
`;

const LogoutTitle = styled.div`
  color: #bcb8b8;
`;

//--------------CheckUser----------------------

//---------------Command People------------------

const RecommendContainer = styled.div`
  width: 280px;
  height: 500px;
  padding-left: 10px;
`;

const RecommendTitle = styled.div`
  font-size: 18px;
  color: #a3a3a3;
`;

const RecommendUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const RecommendUserList = styled.div`
width:100%:
`;

const RecommendUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RecommendUserImg = styled.img`
  width: 38px;
  height: 38px;
  background-color: black;
  border-radius: 50%;
  margin-right: 10px;
`;

const RecommendUserFollowButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px 7px 5px 7px;
  background-color: #f7dd07;
  font-size: 14px;
  border-radius: 4px;
  color: white;
`;

const RecommendUserName = styled.div`
  margin-right: 30px;
`;

//---------------Command People------------------

//---------------MorePost------------------------

const MorePostBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MorePostContainer = styled.div`
  width: 800px;
  height: 580px;
  background-color: white;
  opacity: 1;
  display: flex;
  position: relative;
  display: none;
`;

const MorePostImg = styled.img`
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;

const MorePostComments = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid blue;
`;

const MorePostContainerCloseIcon = styled(IoCloseSharp)`
  font-size: 40px;
  color: white;
  position: absolute;
  top: -10%;
  right: -20%;
`;

//---------------MorePost------------------------

//-----------------Story-------------------------
const StoryContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  @media screen and (max-width: 501px) {
    margin-top: 50px;
  }
`;
const Story = styled.div`
  width: 100px;
  height: 140px;
  border-radius: 17px;
  background-color: white;
  margin-right: 10px;
  margin-left: 10px;
  flex-shrink: 0;
  background-color: hotPink;
  position: relative;
`;
const StoryImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 17px;
  object-fit: cover;
`;

const StoryProfileContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryProfileImg = styled.img`
  border: 3px solid black;
  background-color: white;
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;

const StoryProfileName = styled.span`
  background-color: white;
  color: black;
  padding: 4px 7px 4px 7px;
  border-radius: 8px;
  font-size: 12px;
  margin: 0 auto;
`;

//-----------------Story-------------------------
// width: 90px;
const MainContentsContainer = styled.div`
  height: auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1250px) {
    margin-right: 320px;
  }
  @media screen and (max-width: 1019px) {
    margin: 0;
  }
  @media screen and (max-width: 799px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 705px) {
    margin: 0;
  }

  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
//-------------------------Post----------------------------------
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
  border-radius: 8px 8px 0px 0px;
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

//-------------------------Post----------------------------------

/*@media screen and (max-width: 610px) {
  display: none;
}*/
