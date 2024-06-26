import React from "react";
import Row from "../components/Row";
import requests from "../Requests";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="3" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="5" title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
};

export default Home;
