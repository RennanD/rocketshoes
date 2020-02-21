import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CartView = styled.View`
  padding: 20px;
  max-height: 700px;
  background: #fff;
  border-radius: 10px;
  margin: 20px 30px;
`;

export const Empty = styled.View`
  padding: 20px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
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
  margin: 0 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const SubtotalView = styled.View`
  padding: 7px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  background: #eee;
  align-items: center;
`;

export const ActionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountProduct = styled.TextInput`
  padding: 4px;
  width: 50px;
  border-radius: 4px;
  background: #fff;
  margin: 0 5px;
`;

export const Subtotal = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Hr = styled.View`
  border-color: #ddd;
  border-style: solid;
  border-bottom-width: 1px;
  margin: 15px 0;
`;

export const Footer = styled.View`
  padding: 20px 0;
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
