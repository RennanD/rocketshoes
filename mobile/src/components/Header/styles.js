import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 120px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const CartButton = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Badge = styled.View`
  padding: 3px 7px;
  background: #7159c1;
  position: absolute;
  border-radius: 12px;
  top: -2px;
  right: -2px;
  border: 2px solid #141419;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;
