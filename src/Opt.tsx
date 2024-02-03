import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { css } from "styled-components";
import ChildCp1 from "./ChildCp1";

const B = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MainSideNav>
        <MainSideNavContent></MainSideNavContent>
      </MainSideNav>
      <MainContentsContainer>
        <StoryContainer>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
          <Story></Story>
        </StoryContainer>
        <PostsContainer>
          <Post>
            <PostContentContainer>
              <PostImg
                src={
                  "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <PostContactInfoV2></PostContactInfoV2>
              <PostContent></PostContent>
            </PostContentContainer>
            <PostContactInfo></PostContactInfo>
          </Post>
          <Post>
            <PostContentContainer>
              <PostImg></PostImg>
              <PostContactInfoV2></PostContactInfoV2>
              <PostContent></PostContent>
            </PostContentContainer>
            <PostContactInfo></PostContactInfo>
          </Post>
        </PostsContainer>
      </MainContentsContainer>
      <MainSideNav2></MainSideNav2>
    </Container>
  );
};

export default B;

const flexCenter = `
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: auto;
  width: 100vw;
  ${flexCenter}
  @media screen and (max-width: 1250px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 799px) {
    justify-content: flex-start;
  }
`;

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
const MainSideNavContent = styled.div`
  width: 270px;
  background-color: pink;
`;

const MainSideNav2 = styled.nav`
  width: 320px;
  height: 100vh;
  background-color: yellow;
  position: absolute;
  opacity: 0.4;
  right: 0;
  @media screen and (max-width: 1019px) {
    display: none;
  }
`;

const StoryContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: purple;
  display: flex;
  align-items: center;
  overflow-x: scroll;
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

  @media screen and (max-width: 450px) {
    width: 85px;
    height: 110px;
    margin-right: 8px;
    margin-left: 8px;
  }
`;

const MainContentsContainer = styled.div`
  height: auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1250px) {
    margin-right: 320px;
  }
  @media screen and (max-width: 799px) {
    margin-left: 100px;
  }
`;

const PostsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.div`
  border: 2px solid white;
  width: 500px;
  height: 630px;
  margin-top: 100px;
  display: flex;
  @media screen and (max-width: 501px) {
    width: 100%;
    height: 100%;
  }
`;

const PostContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 421px) {
    position: relative;
    padding-bottom: 166.1%;
  }
`;

const PostContactInfo = styled.div`
  width: 90px;
  height: 100%;
  @media screen and (max-width: 501px) {
    display: none;
  }
`;

const PostImg = styled.img`
  border: 5px solid white;
  width: 100%;
  height: 570px;

  @media screen and (max-width: 421px) {
    height: 81%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

/*
const CommonMobilePosition = css`
  position: absolute;
  top: 0;
  left: 0;
`;*/

const PostContent = styled.div`
  width: 100%;
  height: 60px;
  background-color: blue;
  @media screen and (max-width: 421px) {
    height: 9.5%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const PostContactInfoV2 = styled.div`
  width: 100%;
  height: 60px;
  background-color: red;
  display: none;
  @media screen and (max-width: 501px) {
    display: block;
  }
  @media screen and (max-width: 421px) {
    height: 9.5%;
    position: absolute;
    bottom: 9.5%;
    left: 0;
  }
`;
