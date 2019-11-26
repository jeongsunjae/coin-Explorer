import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 5px;
`;

const Ranking = styled.span`
  font-weight: 600;
`;

const Coin = ({ name, symbol, rank, id }) => (
  <Link to={`/coins/${id}`}>
    <Container>
      <Ranking>#{rank}</Ranking> {name}/{symbol} ->
    </Container>
  </Link>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};

export default Coin;
