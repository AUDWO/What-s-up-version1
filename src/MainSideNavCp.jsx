import styled from "styled-components";

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

//more
import { FcMenu } from "react-icons/fc";

import { Pencil } from "./Pencil";
import BooksIcon from "./BooksIcon";

const MainSideNavCp = () => {
  return (
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
            <BooksIcon />
            <MainSideNavMenuTitle>일기</MainSideNavMenuTitle>
          </MainSideNavMenuWrapper>
          <MainSideNavMenuWrapper>
            <Pencil />
            <MainSideNavMenuTitle>일기 쓰기</MainSideNavMenuTitle>
          </MainSideNavMenuWrapper>
          <MainSideNavMenuWrapper>
            <ProfileIcon />
            <MainSideNavMenuTitle>프로필</MainSideNavMenuTitle>
          </MainSideNavMenuWrapper>
          <MainSideNavMenuWrapper>
            <MoreIcon />
            <MainSideNavMenuTitle>더 보기</MainSideNavMenuTitle>
          </MainSideNavMenuWrapper>
        </MainSideNavMenuList>
      </MainSideNavContent>
    </MainSideNav>
  );
};

export default MainSideNavCp;

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

const MoreIcon = styled(FcMenu)`
  font-size: 30px;
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
