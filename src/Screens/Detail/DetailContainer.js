import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getcoinsDetail } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      data: {}
    };
  }

  getcoinsDetail = async () => {
    try {
      const { data } = await getcoinsDetail(this.props.match.params.id);

      this.setState({
        data
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }

    //console.log(this.state);
  };

  componentDidMount() {
    this.getcoinsDetail();
  }

  render() {
    return <DetailPresenter {...this.state} />;
  }
}
