import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { MagnifyingGlassPlus } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CardMovies from "../../components/CardMovies";

interface Movie {
  id: Number;
  title: String;
  poster_path: String;
  overview: String;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovies, setSearchMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleKMoreData = async () => {
    setLoading(true);
    const response = await api.get("/movie/popular", {
      params: {
        page,
      },
    });
    setMovies([...movies, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  };

  const handleSearchMovies = async (query: string) => {
    setLoading(true);
    const response = await api.get("/search/movie", {
      params: {
        query,
      },
    });

    setSearchMovies(response.data.results);
    setLoading(false);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    handleSearchMovies(text);
  };

  const moviesData = search.length > 0 ? searchMovies : movies;

  useEffect(() => {
    handleKMoreData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.seactionHeader}>
        <Text style={styles.header}>O que você quer assistir hoje?</Text>
        <View style={styles.sourceBar}>
          <TextInput
            placeholderTextColor={"#fff"}
            placeholder="Buscar"
            style={styles.input}
            value={search}
            onChangeText={handleSearch}
          />
          <MagnifyingGlassPlus color="#fff" size={25} weight="light" />
        </View>
      </View>
      <View>
        <FlatList
          data={moviesData}
          numColumns={3}
          renderItem={(item) => <CardMovies data={item.item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 32,
            paddingTop: 16,
            paddingBottom: 160,
          }}
          onEndReached={() => handleKMoreData()}
          onEndReachedThreshold={0.5}
        />
        {loading && <ActivityIndicator size={50} color="#0296e5" />}
      </View>
    </View>
  );
};

export default Home;
