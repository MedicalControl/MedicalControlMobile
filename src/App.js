import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function App() {
  const [imageURI, setImageURI] = useState("");

  useEffect(() => {
    fetch("https://medicalcontrolapi.onrender.com/api/getImages/")
      .then((response) => {
        if (!response.ok) throw new Error("Cannot get the uri");
        return response.json();
      })
      .then((data) => {
        const imageName = data; 
        console.log(imageName);
        const uri = `https://medicalcontrolapi.onrender.com/1-mokeywit.png`;
        setImageURI(uri);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      {imageURI !== "" && (
        <Image source={{ uri: imageURI }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
});
