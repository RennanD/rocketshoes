import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }
  }
`;

export const BadgeView = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 2px;
`;

export const Badge = styled.div`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  top: -6px;
  right: -14px;
  padding: 2px 5px;
  border-radius: 50%;
  background: #7159c1;
  border: 2px solid #141419;
  color: white;
  transition: 0.2s;
`;
