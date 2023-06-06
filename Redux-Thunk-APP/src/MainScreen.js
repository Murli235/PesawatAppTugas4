import React from "react";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Jadwal = [
  {
    id: "1",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Sriwijaya Air",
    departureDate: "5 Mar 2023, 12:00",
    tanggalKedatangan: "6 Mar 2023, 20:00",
  },
  {
    id: "2",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Air Asia",
    departureDate: "5 Mar 2023, 14:00",
    tanggalKedatangan: "6 Mar 2023, 16:20",
  },
  {
    id: "3",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Garuda Indonesia",
    departureDate: "5 Mar 2023, 10:00",
    tanggalKedatangan: "6 Mar 2023, 12:00",
  },
  {
    id: "4",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Sriwijaya Air",
    departureDate: "15 Mar 2023, 13:00",
    tanggalKedatangan: "16 Mar 2023, 15:00",
  },
  {
    id: "5",
    departureCity: "Jakarta",
    arrivalCity: "Bandar lampung",
    airline: "Lion Air",
    departureDate: "3 Mar 2023, 03:00",
    tanggalKedatangan: "4 Mar 2023, 01:30",
  },
  {
    id: "6",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Citilink",
    departureDate: "7 Mar 2023, 12:30",
    tanggalKedatangan: "8 Mar 2023, 01:00",
  },
  {
    id: "7",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Batik Air",
    departureDate: "10 Mar 2023, 12:00",
    tanggalKedatangan: "12 Mar 2023, 20:00",
  },
  {
    id: "8",
    departureCity: "Jakarta",
    arrivalCity: "Bandar Lampung",
    airline: "Garuda Indonesia",
    departureDate: "10 Mar 2023, 14:00",
    tanggalKedatangan: "11 Mar 2023, 08:15",
  },
  {
    id: "9",
    departureCity: "Jakarta",
    arrivalCity: "Bandar lampung",
    airline: "Garuda Indonesia",
    departureDate: "12 Mar 2023, 15:00",
    tanggalKedatangan: "13 Mar 2023, 20:00",
  },
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.departureCity} - {item.arrivalCity}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.airlineContainer}>
          <FontAwesome name="plane" size={28} color="white" />
          <Text style={styles.airline}>{item.airline}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-departure" size={15} color="white" />
            {item.departureDate}
          </Text>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-arrival" size={15} color="white" />
            {item.tanggalKedatangan}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Pesawat App</Text>
          <Feather name="user" size={30} color="white" />
        </View>
        <Text style={styles.subTitle}>Jadwal Penerbangan</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>&copy; MURLIANA - 120140076</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#686868",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#686868",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 10,
  },
  date: {
    color: "white",
  },
  copyright: {
    color: "#686868",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default MainScreen;
