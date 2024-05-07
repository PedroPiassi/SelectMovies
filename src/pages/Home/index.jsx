import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>O que você quer assistir hoje?</Text>
      <View style={styles.sourceBar}>
        <TextInput placeholder="Buscar" />
      </View>
    </View>
  );
};

export default Home;
