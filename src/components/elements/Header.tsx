import { Flex, Group } from "@mantine/core";

import { HeaderText, SubheaderText } from "../../styles/pageElementStyles";
import { NavDrawer } from "./NavDrawer";

export const Header = (props: any) => {
  return (
    <Group
      position='apart'
      align='center'
      sx={{ paddingLeft: 16, paddingRight: 16 }}>
      <NavDrawer />

      <Flex direction='column' align='flex-end'>
        <HeaderText>{props.title}</HeaderText>
        <SubheaderText>{props.subtitle && props.subtitle}</SubheaderText>
      </Flex>
    </Group>
  );
};
