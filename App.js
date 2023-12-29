import React, {Component} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from "react-native";


class App extends Component {
  state = {
    firstname:"",
    lastname:"",
    alamat:""
  }
  firstnameTextChange = (inputText) =>{
    this.setState({firstname : inputText})
  }

  lastnameTextChange = (inputText) =>{
    this.setState({lastname : inputText})
  }
  alamatTextChange = (inputText) =>{
    this.setState({alamat : inputText})
  }

  hasil = () => {
    alert ("masukkan email" + this.state.firstname + this.state.lastname + " password: "+this.state.alamat)
  }
  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={this.firstnameTextChange}
          placeholder = "email"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.lastnameTextChange}
          placeholder = "password"
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={this.alamatTextChange}
          placeholder = "masukkan alamat"
        /> */}
        <Button styles={styles.tombol}
          title="login"
          onPress={this.hasil}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tombol: {
    backgroundColor:'blu'
  }
});

export default App;