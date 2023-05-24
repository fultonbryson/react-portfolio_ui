import styled from "styled-components";
import { Colors, Fonts } from "./styleVariables";

export const HeaderText = styled.p`
  font-family: "${Fonts.primary}";
  color: ${Colors.white};
  font-size: 28px;
  font-weight: 700;
  margin: 0px;
`;

export const SubheaderText = styled.p`
  font-family: "${Fonts.secondary}";
  font-size: 16px;
  color: ${Colors.white};
  margin: 0px;
`;

// export const LinkText = styled.a`
//   height: 20px;
//   margin: 0;
// `;
