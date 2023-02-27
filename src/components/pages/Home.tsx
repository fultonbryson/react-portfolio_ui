import { useEffect, useState } from "react";
import { API_URL } from "../../utils/API";
import { Header } from "../elements/Header";
import { PortfolioCard } from "../elements/PortfolioCard";
import { useWindowScroll } from "@mantine/hooks";
import axios from "axios";
import { Affix, Button, Flex, Transition, ActionIcon } from "@mantine/core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");

  const handleFilter = (filter: any) => {
    setFilter(filter);
    setFilteredData(
      portfolioData.filter((item) => {
        return item.category === filter;
      })
    );
  };

  const portfolioItems = () => {
    return filteredData.length >= 0 && filter
      ? filteredData.map((item) => {
          return <PortfolioCard key={item.id} portfolioItem={item} />;
        })
      : portfolioData.map((item) => {
          return <PortfolioCard key={item.id} portfolioItem={item} />;
        });
  };

  const getPortfolioItems = () => {
    axios
      .get(`${API_URL}/portfolio/portfolio_items`)
      .then((res) => {
        setPortfolioData(res.data.portfolio_items);

        console.log(res.data.portfolio_items);
      })
      .catch((err) => {
        console.log("Error Getting Portfolio Items", err);
      });
  };

  useEffect(() => {
    getPortfolioItems();
  }, []);

  return (
    <>
      <Header title='Bryson Fulton' subtitle='Full Stack Developer' />

      <Flex
        mih={50}
        bg='rgba(0, 0, 0, .1)'
        justify='flex-start'
        align='flex-start'
        sx={{ top: 100 }}>
        <Button
          variant='light'
          color='grape'
          fullWidth
          radius='xs'
          sx={{ marginTop: 0 }}
          onClick={() => handleFilter("Maintainer")}>
          Maintainer
        </Button>
        <Button
          variant='light'
          color='grape'
          fullWidth
          radius='xs'
          sx={{ marginTop: 0 }}
          onClick={() => handleFilter("Contributor")}>
          Contributor
        </Button>
        <Button
          variant='light'
          color='grape'
          fullWidth
          radius='xs'
          sx={{ marginTop: 0 }}
          onClick={() => handleFilter("")}>
          All
        </Button>
      </Flex>

      <Flex
        mih={50}
        bg='rgba(0, 0, 0, .1)'
        gap='md'
        justify='flex-start'
        align='center'
        direction='column'
        wrap='nowrap'
        pb={16}>
        {portfolioItems()}
      </Flex>

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
