import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumido: 0,
      status: "Ruim",
      pct: 0
    };
    this.addGlass = this.addGlass.bind(this);
    this.atualizate = this.atualizate.bind(this);
  }

  atualizate() {
    let s = this.state;
    s.pct = Math.floor((s.consumido / 2000) * 100);

    if (s.pct >= 100) {
      s.status = "Bom";
    } else {
      s.status = "Ruim";
    }

    this.setState(s);
  }

  addGlass() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);

    this.atualizate();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require("./images/waterbg.png")}
          style={styles.bgImage}
        >
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text>
                <Text style={styles.areaDado}>
                  {this.state.consumido}
                  ml
                </Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml" onPress={this.addGlass} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },

  bgImage: {
    flex: 1,
    width: null
  },

  infoArea: {
    flex: 1,
    flexDirection: "row",
    marginTop: 70
  },

  area: {
    flex: 1,
    alignItems: "center"
  },

  areaTitulo: {
    color: "#45B2FC"
  },

  areaDado: {
    color: "#2B4274",
    fontSize: 15,
    fontWeight: "bold"
  },

  pctArea: {
    marginTop: 220,
    alignItems: "center"
  },

  pctText: {
    fontSize: 70,
    color: "#FFF",
    backgroundColor: "transparent"
  },

  btnArea: {
    marginTop: 30,
    alignItems: "center"
  }
});
