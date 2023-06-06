import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [berangkat, setpesawat] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-menu" size={24} color="black" />
        <Text style={styles.title}>Pesawat App</Text>
        <Feather name="user" size={30} color="black" />
      </View>
      <View style={styles.UiContainer}>
        <Text>Keberangkatan</Text>
        <View style={styles.inputContainer}>
          {<FontAwesome5 name="plane-departure" size={24} color="black" />}
          <TextInput
            style={styles.inputs}
            onChangeText={setpesawat}
            value={berangkat}
            placeholder="Kota Asal"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Tujuan</Text>
        <View style={styles.inputContainer}>
          {<FontAwesome5 name="plane-arrival" size={24} color="black" />}
          <TextInput
            style={styles.inputs}
            onChangeText={setTujuan}
            value={tujuan}
            placeholder="Kota Tujuan"
          />
        </View>
        <Text>Tanggal</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <TextInput
            style={styles.inputs}
            onChangeText={setTanggal}
            value={tanggal}
            placeholder="Tanggal"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <Text style={styles.button}>Cari Tiket</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>&copy; MURLIANA - 120140076</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#686868",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    borderWidth: 1,
  },
  footer: {
    marginTop: 300,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#e9e9e9",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    allignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  inputs: {
    height: 50,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    Width: "100%",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#black",
  },
  title: {
    fontSize: 25,
    color: "black",
  },
  UiContainer: {
    backgroundColor: "#e9e9e9",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    margin: "auto",
  },
});

export default HomeScreen;
