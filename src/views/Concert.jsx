import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../api/url";
import { ActivityIndicator, Button, Divider, Paragraph, Title } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import dateFormatter from "../utils/dateFormatter";

export default function Concert({ route }) {
  const { id } = route.params;
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [concert, setConcert] = useState(null);

  useEffect(() => {
    getConcert();
  }, [id]);

  const getConcert = async () => {
    try {
      let res = await axios.get(`${apiUrl}/concerts/${id}`);
      setConcert(res.data.response);
      setMessage("");
    } catch (error) {
      setMessage(error.response ? error.response.data.message || error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <ActivityIndicator animating={true} style={styles.message} />
  ) : !!concert ? (
    <ScrollView>
      <Image source={{ uri: concert.banner }} style={styles.banner} />
      <View style={styles.content}>
        <Title style={styles.capitalize}>{concert.name}</Title>
        <Paragraph style={styles.bottomSpace}>{concert.description}</Paragraph>
        <Divider />
        <Paragraph style={styles.capitalize}>
          <FontAwesome name="map-signs" /> {concert.venue.name} {concert.venue.address} {concert.venue.city}{" "}
          {concert.venue.country}
        </Paragraph>
        <Paragraph>
          <FontAwesome name="calendar" /> {dateFormatter(concert.date)}
        </Paragraph>
        <Title style={styles.capitalize}>{concert.type === "festival" ? "Lineup" : "Artist"}</Title>
        {concert.artists.map(artist => (
          <Paragraph key={artist._id}>
            <FontAwesome name="music" /> {artist.name}
          </Paragraph>
        ))}
      </View>
      <Divider />
      <View>
        <View style={styles.categoryContent}>
          <Title style={styles.categoryTitle}>Tickets</Title>
          <View style={styles.row}>
            <Text style={styles.categoryName}>{concert.category.name}</Text>
            <Text>${concert.category.price} ARS</Text>
          </View>
        </View>
        <Button icon="cart" mode="contained" style={styles.button}>
          Add to cart
        </Button>
      </View>
    </ScrollView>
  ) : (
    <Title style={styles.message}>{message}</Title>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  message: {
    textAlign: "center",
    marginTop: 20,
  },
  capitalize: {
    textTransform: "capitalize",
  },
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  button: {
    borderRadius: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSpace: {
    marginBottom: 20,
  },
  categoryContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  categoryTitle: {
    textAlign: "center",
    marginBottom: 15,
  },
  categoryName: {
    textTransform: "capitalize",
    textDecorationLine: "underline",
  },
});
