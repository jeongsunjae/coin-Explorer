import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const MarketPresenter = ({ loading, markets }) =>
  loading ? (
    <Loader />
  ) : (
    markets.map((market, index) => <Market key={index} {...market} />)
  );

MarketPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MarketPresenter;
