import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import NavBar from './components/NavBar';
import Displayer from './components/Displayer';

import { fetchData, randomStory } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { data, randomize, storyID } = this.props;

    return (
      <div>
        <NavBar />
        <Displayer data={data[storyID] || {}} />
        <Button type="primary" onClick={randomize}>
          Another Joke
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  data: state.data,
  storyID: state.storyID,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchData()),
  randomize: () => dispatch(randomStory()),
});

App.propTypes = {
  fetch: PropTypes.func.isRequired,
  randomize: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  storyID: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
