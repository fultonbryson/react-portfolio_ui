import { ActionIcon, Affix, Transition } from "@mantine/core";
import { Header } from "../elements/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import { DesktopBioView, MobileBioView } from "./bioElements";

export const Bio = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );

  return (
    <>
      <Header title='Bio' subtitle='All About Me' />

      {displayType === "MOBILE" ? <MobileBioView /> : <DesktopBioView />}

      <Affix position={{ bottom: 30, right: 0 }}>
        <Transition transition='slide-up' mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              color='green'
              variant='transparent'
              radius='xl'
              size='xl'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}>
              <FontAwesomeIcon size='lg' icon={faArrowUp} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
};
