import React from "react";
import MarketPresenter from "./MarketPresenter";
import { getMarkets } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      markets: []
    };
  }

  componentDidMount() {
    this.getMarkets();
  }
  getMarkets = async () => {
    const {
      location: { pathname }
    } = this.props;
    console.log(pathname);
    try {
      const { data: markets } = await getMarkets(pathname);
      this.setState({
        markets
      });
      console.log(markets);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <MarketPresenter {...this.state} />;
  }
}
