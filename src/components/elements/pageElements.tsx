import { Link } from "react-router-dom";
import { Colors, Fonts } from "../../styles/styleVariables";
import { ActionIcon, Affix, Button, Transition } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";

export const NavItem = (props: any) => {
  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );
  return (
    <Link
      onClick={props.onClick}
      to={props.path}
      style={{
        textDecoration: "none",
        color: `${displayType === "MOBILE" ? Colors.primary : Colors.white}`,
        marginBottom: 10,
        fontFamily: `${Fonts.primary}`,
      }}>
      {props.title}
    </Link>
  );
};

export const TopScroller = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 25, right: 25 }}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            color='green'
            variant='outline'
            radius='xl'
            size='lg'
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}>
            <FontAwesomeIcon size='lg' icon={faArrowUp} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};
