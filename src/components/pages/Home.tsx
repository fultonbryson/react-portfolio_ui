import { useEffect, useState } from "react";
import { API_URL } from "../../utils/API";
import { Header } from "../elements/Header";
import { PortfolioCard } from "../elements/portfolioElements";
import axios from "axios";
import { Button, Flex } from "@mantine/core";

export const Home = () => {
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
        wrap='nowrap'>
        {portfolioItems()}
      </Flex>
    </>
  );
};
