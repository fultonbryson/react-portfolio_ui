import { useEffect, useState } from "react";
import { API_URL } from "../../utils/API";
import { Header } from "../elements/Header";
import axios from "axios";
import { BackgroundImage, Flex, Group } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import {
  FilterButton,
  PortfolioDesktopView,
  PortfolioMobileView,
} from "./homeElements";

import neuronConstellation from "../../content/assets/neuronConstellation.jpg";

export const Home = () => {
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");
  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );

  const handleFilter = (filter: any) => {
    setFilter(filter);
    setFilteredData(
      portfolioData.filter((item) => {
        return item.category === filter;
      })
    );
  };

  const getPortfolioItems = () => {
    axios
      .get(`${API_URL}/portfolio/portfolio_items`)
      .then((res) => {
        setPortfolioData(res.data.portfolio_items);
      })
      .catch((err) => {
        console.log("Error Getting Portfolio Items", err);
      });
  };

  useEffect(() => {
    getPortfolioItems();
  }, []);

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      sx={{ height: "100vh", width: "100vw" }}>
      <BackgroundImage src={neuronConstellation} h='100%'>
        <Header title='Bryson Fulton' subtitle='Full Stack Developer' />

        {/* <Flex
        mih={100}
        bg={
          displayType === "MOBILE" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)"
        }
        justify='flex-start'
        align='flex-start'>
        <FilterButton
          handleFilter={handleFilter}
          filterCategory={"Maintainer"}
          filterType={"Maintainer"}
        />
        <FilterButton
          handleFilter={handleFilter}
          filterCategory='Contributor'
          filterType='Contributor'
        />
        <FilterButton
          handleFilter={handleFilter}
          filterCategory={""}
          filterType='All'
        />
      </Flex> */}

        {displayType === "MOBILE" ? (
          <PortfolioMobileView
            filteredData={filteredData}
            portfolioData={portfolioData}
            filter={filter}
          />
        ) : (
          <PortfolioDesktopView
            filteredData={filteredData}
            portfolioData={portfolioData}
            filter={filter}
            handleFilter={handleFilter}
            displayType={displayType}
          />
        )}
      </BackgroundImage>
    </Flex>
  );
};
