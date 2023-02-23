import { Flex, Group } from "@mantine/core";

import { HeaderText, SubheaderText } from "../../styles/pageElementStyles";
import { NavDrawer } from "./NavDrawer";
import { Colors } from "../../styles/styleVariables";

export const Header = (props: any) => {
  return (
    <Group
      position='apart'
      align='center'
      sx={{
        paddingLeft: 16,
        paddingRight: 16,
        background: Colors.primary,
        height: 100,
      }}>
      <NavDrawer />

      <Flex direction='column' align='flex-end' justify='center'>
        <HeaderText>{props.title}</HeaderText>
        {props.subtitle && <SubheaderText>{props.subtitle}</SubheaderText>}
      </Flex>
    </Group>
  );
};
