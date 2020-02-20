import React, { useState, useEffect } from "react";

import {
  Container,
  ProductList,
  ProductImage,
  Title,
  Price,
  Button,
  ButtonText,
  Card
} from "./styles";

import Background from "../../components/Background";

import Header from "../../components/Header";

import api from "../../services/api";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <Background>
      <Container>
        <Header navigation={navigation} />
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Card>
              <ProductImage source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
              <Button>
                <ButtonText>Adicionar ao carrinho</ButtonText>
              </Button>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
}
