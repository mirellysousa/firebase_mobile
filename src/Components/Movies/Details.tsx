import { RouteProp, useRoute } from "@react-navigation/native";
import { ActivityIndicator, Card, Icon } from "react-native-paper";
import { MoviesStack } from "../../types/navigation";
import { useEffect, useState } from "react";
import { Movie } from "../../types";
import { movies } from "../../services/api";

const Details = () => {
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute<RouteProp<MoviesStack, "Details">>();
  const { id } = route.params;

  const fetchData = async () => {
    if (!id) return;
    setIsLoading(true);
    const { data } = await movies.get<Movie>(id);
    setMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (isLoading) return <ActivityIndicator size="large" />;
  if (!movie) return <></>;

  return (
    <Card>
      <Card.Cover source={{ uri: movie.posterUrl }} />
      <Card.Title
        titleNumberOfLines={5}
        titleVariant="headlineLarge"
        subtitleVariant="bodyLarge"
        title={movie.originalTitle}
        subtitle={movie.company}
      />
      <Card.Content>
        <Card.Title
          title={movie.rate}
          subtitle="Avaliação"
          left={(props) => <Icon {...props} color="#FFDF00" source="star" />}
        />
        <Card.Title
          title={`${movie.minutes} mins`}
          subtitle="Duração"
          left={(props) => <Icon {...props} color="#69bfe5" source="clock" />}
        />
        <Card.Title
          title={movie.financialData.budget.toLocaleString("pt-BR", {
            style: "currency",
            currency: "USD",
          })}
          subtitle="Orçamento"
          left={(props) => <Icon {...props} color="#AC7434" source="wallet" />}
        />
        <Card.Title
          title={movie.financialData.gross.worldwide.toLocaleString("pt-BR", {
            style: "currency",
            currency: "USD",
          })}
          subtitle="Faturamento"
          left={(props) => <Icon {...props} color="#85BB65" source="cash" />}
        />
      </Card.Content>
    </Card>
  );
};

export default Details;
