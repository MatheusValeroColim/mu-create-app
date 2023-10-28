import styled from "styled-components";


export const LightTheme = {
    corFundo: 'honeydew',
    corTexto: 'maroon',
    corTitulo: 'red'
}

export const DarkTheme = {
    corFundo: '#2a0a0a',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`


// Criando um título
export const TitlePage = styled.h1`
    color: red;
    font-size: 20px;
`

export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`


// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
`