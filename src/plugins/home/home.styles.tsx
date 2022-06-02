import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


export const LinkContainer = styled(Link)`
  height: 100%;
  box-sizing: content-box;
  width: 70px;
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 4px;
  color: #5ba839;
  text-decoration: none;
  background-color: rgba(32, 39, 26, 0.08);
  &:hover {
    border: 1px solid #5ba839;
    background-color: white;
  }
`;

