import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import reddit from '~/reddit';

class Feed extends React.Component {
  render() {
    const { randomValue, randomAction } = this.props;

    return (
      <View>
        <TouchableWithoutFeedback onPress={randomAction}>
          <Text>{randomValue}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const enhance = connect(
  state =>
    console.log('hi', state) || {
      randomValue: reddit.selectors.random(state),
    },
  dispatch => bindActionCreators({ randomAction: reddit.actions.random }, dispatch),
);

export default enhance(Feed);
