/*
 * This Android demo shows how to integrate `PullToRefreshViewAndroid` with `ScrollableParallaxView`.
 */
import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

import Talks from "./Talks";

class AndroidExample extends Component {
  render() {
    return <Talks key="talks" />;
  }
}

AppRegistry.registerComponent("ListViewExample", () => AndroidExample);
