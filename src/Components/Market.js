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
  text-decoration: underline;
  font-weight: bold;
`;

const Market = ({ exchange_name }) => (
  <Container>
    <List>
      <Item>{exchange_name}</Item>
    </List>
  </Container>
);

Market.propTypes = {
  exchange_name: PropTypes.string.isRequired
};

export default Market;
