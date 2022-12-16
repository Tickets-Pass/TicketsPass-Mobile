import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile({ navigation }) {
    let [age, setAge] = useState("");
    let { user } = useSelector((store) => store.userReducer);

    function getEdad(dateString) {
        let hoy = new Date();
        let fechaNacimiento = new Date(dateString);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        setAge(edad);
    }
    useEffect(() => {
        getEdad(fecha);
    }, []);

    let fecha = new Date(user.birthDate);
    fecha = fecha.toLocaleDateString();

    return (
        <View style={{ backgroundColor: "#bbb", flex: 1 }}>
            <Text style={{ fontSize: 40, fontWeight: "800", textAlign: "center", margin: 10 }}>My Profile </Text>
            <Image source={{ uri: user.photo }} style={{ width: 200, height: 200, alignSelf: "center" }} />
            <Text style={{ fontSize: 18, textAlign: "center" }}>Name: {user.name + " " + user.lastName}</Text>
            <Text>BirthDate: {new Date(user.birthDate).toLocaleDateString()} Age: {age}</Text>
            <Text>Email: {user.email}</Text>
            <Button title="GO TO HOMEPAGE" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    );
}
