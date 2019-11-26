import React from "react";
import CoinExchangePresenter from "./CoinExchangePresenter";
import { getCoinExchanges } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      exchanges: []
    };
  }

  componentDidMount() {
    this.getCoinExchanges();
  }
  getCoinExchanges = async () => {
    const {
      location: { pathname }
    } = this.props;
    console.log(pathname);
    try {
      const { data: exchanges } = await getCoinExchanges(pathname);
      this.setState({
        exchanges
      });
      console.log(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <CoinExchangePresenter {...this.state} />;
  }
}
