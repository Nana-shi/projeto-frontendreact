import {ContainerLateral} from "./FilterStyled"

export function Filter(props){

    const handleNomeSearch = (event)=>{
        props.setPesquisa(event.target.value)
    }

    const handleMinSearch = (event)=>{
        props.setMinimo(event.target.value)
    }

    const handleMaxSearch = (event)=>{
        props.setMaximo(event.target.value)
    }

    return (
        <>
        <ContainerLateral>
        <h2>Filtrar por:</h2>
        <p>Menor Preço:</p>
        <input type="text" className="Input-Dados" value={props.minimo} onChange={handleMinSearch} placeholder="R$ 0.00"/>
        <p>Maior Preço:</p>
        <input type="text" className="Input-Dados" value={props.maximo} onChange={handleMaxSearch} placeholder="R$ 0.00" />
        <p>Busca por nome:</p>
        <input type="text" className="Input-Dados" value={props.pesquisa} onChange={handleNomeSearch} placeholder="Brinquedo"/>
        </ContainerLateral>
        </>
    )
}

