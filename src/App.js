import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import NavBar from './components/NavBar';

import { fetchData, randomStory } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
        <NavBar />
        <Button type="primary">Another Joke</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchData()),
  random: () => dispatch(randomStory()),
});

App.propTypes = {
  fetch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
