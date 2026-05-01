  import { Link } from "expo-router";
  import { Text, View, StyleSheet} from "react-native";
  import { Image } from "expo-image";

  export default function Index() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Edit app/index.tsx to edit this screen.</Text>        
      </View>
    );
  }

  const styles = StyleSheet.create ({
    container:{
      backgroundColor: "purple",
    },
  })