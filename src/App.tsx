import axios from "axios";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import B from "./B";
import C from "./C";
import D from "./D";
import ProfilePage from "./ProfilePage";
import "./reset.css";
import MorePostMd from "./MorePostMd";
import MoreStory from "./MoreStory";
import MoreDiary from "./MoreDiary";
import Diary from "./Diary";
import WriteDiary from "./WriteDiary";

const App = () => {
  return (
    <BrowserRouter>
      <MorePostMd></MorePostMd>
      <Routes>
        <Route path="/" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/d" element={<D />} />
        <Route path="/p" element={<ProfilePage />} />
        <Route path="/more" element={<MoreStory />} />
        <Route path="/mored" element={<MoreDiary />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/write" element={<WriteDiary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
