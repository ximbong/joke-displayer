import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';

import { fetchData } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return <NavBar />;
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchData()),
});

App.propTypes = {
  fetch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
