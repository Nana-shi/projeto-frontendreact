import styled from "styled-components"

export const ContainerLateral = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 15vw;
    margin-top: 5%;
    padding-top: 30px;

    h2{
        color: blue;
    }

    input{
        border: 1px gray solid;
        border-radius: 4px;
        height: 20px;
        padding-left: 8px;
        background-color: white;
    }

    input:active{
        border: 1px #A94DF3 solid; 
    }

`