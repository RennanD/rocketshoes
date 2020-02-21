import styled from 'styled-components/native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Card = styled.View`
  padding: 20px;
  margin: 0 10px;
  border-radius: 10px;
  background: #fff;
  opacity: ${props => (props.loading ? 0.8 : 1)};
  margin-bottom: 20px;
`;

export const ShimmerCard = styled.View`
  padding: 20px;
`;

export const ShimmerImage = styled(ShimmerPlaceHolder)`
  height: 220px;
  width: 100%;
  border-radius: 4px;
`;

export const ShimmerTitle = styled(ShimmerPlaceHolder)`
  height: 20px;
  width: 200px;
  border-radius: 6px;
  margin: 20px 0;
`;

export const ShimmerPrice = styled(ShimmerPlaceHolder)`
  height: 30px;
  width: 120px;
  border-radius: 6px;
`;

export const ProductImage = styled.Image`
  height: 220px;
  width: 220px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin: 5px 0;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  flex: 1;
  text-align: center;
`;

export const AmoutView = styled.View`
  height: 46px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
`;

export const Amout = styled.Text`
  font-size: 14px;
  margin-left: 5px;
  color: #fff;
  font-weight: 600;
`;
