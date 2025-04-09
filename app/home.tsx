import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Dialog from "../components/dialog/dialog"; // Ajuste o caminho se necessário

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // Estado para abrir/fechar o modal

  return (
    <View style={styles.container}>
      {/* Navbar Superior */}
      <View style={styles.navbar}>
        <Text style={styles.navTextBold}>Olá Jotinha!</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Pesquisar..."
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.row}>
          <View style={[styles.card, styles.cardHalf]}>
            <Text style={styles.cardHeader}>Hemocentro Unicamp</Text>
            <Text style={styles.cardText}>Doação de Sangue</Text>
            <Text style={styles.cardSubText}>8:00 às 17:00</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.cardButtonText}>Saíba mais</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.card, styles.cardHalf]}>
            <Text style={styles.cardHeader}>Cooperativa Vira Lata</Text>
            <Text style={styles.cardText}>Coleta de lixo para reciclagem</Text>
            <Text style={styles.cardSubText}>8:00 às 17:00</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.cardButtonText}>Saíba mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.card, styles.cardHalf]}>
            <Text style={styles.cardHeader}>Banco de alimentos</Text>
            <Text style={styles.cardText}>Arrecadação de alimentos</Text>
            <Text style={styles.cardSubText}>8:00 às 17:00</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.cardButtonText}>Saíba mais</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.card, styles.cardHalf]}>
            <Text style={styles.cardHeader}>Anjos Peludos</Text>
            <Text style={styles.cardText}>Grupo de apoio a animais de rua e conscientização</Text>
            <Text style={styles.cardSubText}>8:00 às 17:00</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.cardButtonText}>Saíba mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Navbar Inferior */}
      <View style={styles.snackbar}>
        <TouchableOpacity style={styles.snackItem}>
          <Ionicons name="home-outline" size={24} color="white" />
          <Text style={styles.snackText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.snackItem}>
          <Ionicons name="person-outline" size={24} color="white" />
          <Text style={styles.snackText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.snackItem}>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.snackText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Dialog*/}
      <Dialog visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    backgroundColor: "#eb4f4f",
    padding: 10,
    paddingHorizontal: 20,
  },
  navTextBold: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  searchIcon: {
    position: "absolute",
    left: 30,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 40,
    backgroundColor: "transparent",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cardHalf: {
    width: "48%",
  },
  cardFull: {
    marginTop: 20,
    width: "48%",
  },
  card: {
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
  },
  cardText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "left",
  },
  cardSubText: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "left",
  },
  cardButton: {
    marginTop: 5,
    backgroundColor: "#eb4f4f",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  cardButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  snackbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#eb4f4f",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  snackItem: {
    alignItems: "center",
  },
  snackText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeScreen;
