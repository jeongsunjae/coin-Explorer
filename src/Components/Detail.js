import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Link,
  HashRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
import market from "../Screens/Market";
import CoinExchange from "../Screens/CoinExchange";
const Container = styled.div`
  margin-bottom: 50px;
`;

const Description = styled.span`
  display: block;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
`;
const Rank = styled.span`
  font-weight: 300;
`;
const List = styled.ul`
  margin-top: 15px;
`;

const Item = styled.li`
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonLink = styled.button`
  border: 1px solid green;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  margin-right: 15px;
  color: ${props => (props.selected ? "white" : "black")};
  background-color: ${props => (props.selected ? "green" : "white")};
`;

const Detail = ({
  description,
  rank,
  open_source,
  proof_type,
  org_structure,
  id,
  location: { pathname }
}) => (
  <Container>
    <Description>{description}</Description>
    <List>
      <Item>
        Rank : <Rank>{rank}</Rank>
      </Item>
      <Item>
        Open Source : <Rank>{open_source ? "Yes" : "No"}</Rank>
      </Item>
      <Item>
        Proof Type : <Rank>{proof_type}</Rank>
      </Item>
      <Item>
        Structure : <Rank>{org_structure}</Rank>
      </Item>
      <Item>
        <Link to={`/coins/${id}/markets`}>
          <ButtonLink selected={pathname === `/coins/${id}/markets`}>
            market
          </ButtonLink>
        </Link>
        <Link to={`/coins/${id}/exchanges`}>
          <ButtonLink selected={pathname === `/coins/${id}/exchanges`}>
            Exchange
          </ButtonLink>
        </Link>
        <Router>
          <Route path="/coins/:id/markets" component={market} />
          <Route path="/coins/:id/exchanges" component={CoinExchange} />
        </Router>
      </Item>
    </List>
  </Container>
);

Detail.propTypes = {
  description: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  open_source: PropTypes.bool.isRequired,
  proof_type: PropTypes.string.isRequired,
  org_structure: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default withRouter(Detail);
