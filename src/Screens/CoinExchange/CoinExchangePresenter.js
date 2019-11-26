import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinExchange from "../../Components/CoinExchange";

const CoinExchangePresenter = ({ loading, exchanges }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges
      .filter(exchange => exchange.fiats.length > 0)
      .map((exchange, index) => <CoinExchange key={index} {...exchange} />)
  );

CoinExchangePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fiats: PropTypes.array.isRequired
    }).isRequired
  ).isRequired
};

export default CoinExchangePresenter;
