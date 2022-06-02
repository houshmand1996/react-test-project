import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar {
        display: none;
        scroll-behavior: smooth;
        will-change:transform ;
    }
`;
