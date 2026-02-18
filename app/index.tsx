import { FlowerLoader } from "@/components/customLoader";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/taxi");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff46",
          width: "90%",
          padding: 20,
        }}
      >
        <Image
          source={require("@/assets/images/taxi_icon.png")}
          style={styles.imglogo}
        />
        <Text
          style={[
            styles.appname,
            { fontSize: 36, fontFamily: "Kanit_700Bold", color: "#000000" },
          ]}
        >
          TAXI METER
        </Text>
        <Text
          style={[
            styles.appname,
            {
              fontSize: 12,
              marginBottom: 30,
              color: "#00990a",
              fontFamily: "Kanit_400Regular",
              fontWeight: "400",
            },
          ]}
        >
          THAI FARE CALCULATOR
        </Text>

        <FlowerLoader size={40} color="#00990a" />
      </View>
      <View style={{ position: "absolute", bottom: 20 }}>
        <Text
          style={[
            {
              fontSize: 20,
              color: "#2F3542",
              textAlign: "center",
              fontFamily: "Kanit_700Bold",
            },
          ]}
        >
          ID: 6652410021 {"\n"}NAME: Thanakorn Thongpriwan
        </Text>
      </View>
    </View>
  );
}

const SIZE = 100;

const styles = StyleSheet.create({
  appname: {
    color: "white",
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffc72c",
    alignItems: "center",
    justifyContent: "center",
  },

  imglogo: {
    width: SIZE * 1.5,
    height: SIZE * 1.5,
  },
});
