'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  ScrollView,
  StyleSheet,
  SwitchIOS,
  Text,
  View
} from 'react-native';
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

class FeaturesList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={tableViewStyles.stage}>
        <TableView>
          <Section header='DESCRIPTION' footer='A Jacob Siegel Production.'>
            <Cell cellStyle='RightDetail' title={this.props.description} />
          </Section>
        </TableView>
      </ScrollView>
    );
  }
}

const tableViewStyles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    width: 320,
  },
});

module.exports = FeaturesList;
