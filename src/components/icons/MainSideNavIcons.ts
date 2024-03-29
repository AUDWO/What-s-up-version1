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

//more
import { FcMenu } from "react-icons/fc";

const NavIconFontsize = "30px;";

export const MoreIcon = styled(FcMenu)`
  font-size: ${NavIconFontsize};
`;

export const HomeIcon = styled(FcHome)`
  font-size: ${NavIconFontsize};
`;
export const DiaryContentsIcon = styled(FcDatabase)`
  font-size: ${NavIconFontsize};
`;

export const KeepDiaryIcon = styled(FcAddDatabase)`
  font-size: ${NavIconFontsize};
`;

export const MakePostIcon = styled(FcAddImage)`
  font-size: ${NavIconFontsize};
`;

export const SearchIcon = styled(FcSearch)`
  font-size: ${NavIconFontsize};
`;

export const ProfileIcon = styled(FcReading)`
  font-size: ${NavIconFontsize};
`;
