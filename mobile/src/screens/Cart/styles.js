import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CartView = styled.View`
  padding: 20px;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  margin: 20px 30px;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScroolIndicator: false,
})`
  flex: 1;
`;

export const ProductView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  height: 100px;
  width: 100px;
`;

export const InfoView = styled.View`
  flex: 1;
  margin: 0 7px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const Footer = styled.View`
  flex: 1;
  max-height: 150px;
`;

export const TotalLabel = styled.Text`
  align-self: stretch;
  text-align: center;
  color: #666;
  font-size: 16px;
  font-weight: 600;
`;

export const Total = styled.Text`
  align-self: stretch;
  text-align: center;
  color: #333;
  font-size: 26px;
  font-weight: bold;
`;
