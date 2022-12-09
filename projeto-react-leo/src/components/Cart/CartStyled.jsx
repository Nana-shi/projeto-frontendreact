import styled from "styled-components"

export const ContainerLateralCart = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 20vw;
    height: 50%;
    margin-top: 5%;
    padding-top: 30px;

    h2{
        color: blue;
    }

    div:hover{
        cursor: pointer;
        color: red;
    }

    span{
        font-size: 12px;
    }
`