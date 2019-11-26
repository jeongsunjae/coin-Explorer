import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin-top: 5px;
`;

const Item = styled.li`
  font-weight: bolder;
`;

const Pay = styled.li`
  font-weight: bold;
`;
const CoinExchange = ({ name, fiats }) => (
  <Container>
    <List>
      <Item>{name}</Item>
      <Pay>Pay On USD {fiats.map(fiat => `${fiat.symbol}\t`)}</Pay>
    </List>
  </Container>
);

CoinExchange.propTypes = {
  name: PropTypes.string.isRequired,
  fiats: PropTypes.array.isRequired
};

export default CoinExchange;
