import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Detail from "../../Components/Detail";

const DetailPresenter = ({ loading, data } = this.props) =>
  loading ? <Loader /> : <Detail {...data} />;

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

Detail.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      rank: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  )
};

export default DetailPresenter;
