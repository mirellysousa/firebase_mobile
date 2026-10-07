import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { List as ListPaper } from "react-native-paper";
import { Movie } from "../../types";
import { movies as moviesApi } from "../../services/api";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MoviesStack } from "../../types/navigation";

const Item = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation<NavigationProp<MoviesStack>>();

  return (
    <ListPaper.Item
      title={movie.originalTitle}
      onPress={() => navigation.navigate("Details", { id: movie.id })}
    />
  );
};

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>();

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await moviesApi.get<Movie[]>("");
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      refreshing={isLoading}
      onRefresh={fetchData}
      data={movies}
      renderItem={({ item }) => <Item movie={item} />}
    />
  );
};

export default List;
