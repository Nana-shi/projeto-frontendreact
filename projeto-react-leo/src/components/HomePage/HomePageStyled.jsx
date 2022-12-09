import styled from "styled-components"

export const MainContainer = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-center: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap; 

    .MainContainer-topo{
        display: flex;
        padding-top:2%;
        align-items: center;
        justify-content: space-around;
    }

    .MainContainer-topo-select{
        border-radius: 8px;
    }

`

export const Card = styled.div`
    border: 1px solid lightblue;
    border-radius: 8px;
    height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom:30px;
    
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        border-radius: 8px 8px 0 0;

        img{
            height: 180px;
            width: auto;
            max-width: 100%;
        }

    }

    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span{
            font-size: 12px;
            width: 90%;
            text-align: center;
        }

        h3{
            font-size: 20px;
            color: blue;
        }

        button{
            background-color: blue;
            border-radius: 8px;
            color: white;
            width: 200px;
            height: 40px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
        }

        button:hover{
            cursor: pointer;
            background-color: darkblue;
            font-weight: light;
            transform: scale(1.1)
        }
    }

    :hover{
        border: blue 3px solid;
    }
`
export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    flex-wrap: wrap;
    `