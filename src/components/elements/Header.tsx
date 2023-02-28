import { Flex, Group } from "@mantine/core";

import { HeaderText, SubheaderText } from "../../styles/pageElementStyles";
import { NavDrawer } from "./NavDrawer";
import { NavSection } from "./NavSection";
import { Colors } from "../../styles/styleVariables";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";

export const Header = (props: any) => {
  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );
  return (
    <Group
      position='apart'
      align='center'
      sx={{
        paddingLeft: 24,
        paddingRight: 24,
        background: Colors.primary,
        height: 100,
      }}>
      {displayType === "MOBILE" ? <NavDrawer /> : <NavSection />}

      <Flex direction='column' align='flex-end' justify='center'>
        <HeaderText>{props.title}</HeaderText>
        {props.subtitle && <SubheaderText>{props.subtitle}</SubheaderText>}
      </Flex>
    </Group>
  );
};
