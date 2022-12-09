import {ContainerLateralCart} from "./CartStyled"

export function Cart (props){

    let totalCart = 0

    const somaCart = ()=>{
        for (let i = 0;i<props.shopping.length;i++){
            totalCart += props.shopping[i].precototal
        }
        return
    }

    const removeItem = (product)=>{
        const buscaItem = props.shopping.filter((item) => item !== product)
        
        props.setShopping(buscaItem)
    }

    somaCart()

    return(
        <ContainerLateralCart>
        <h2>Carrinho:</h2>
        
            {props.shopping.map((product,index)=>{
            return(
                <div key={index} onClick={()=>removeItem(product)}>
                <p><span>X{product.quantidade} </span><span>{product.nome} </span><span> <b>{product.precototal.toFixed(2)}</b></span></p>
                </div>
            )    
        })}
        
        <p><b>Valor total: R$ {totalCart.toFixed(2)}</b></p>
        </ContainerLateralCart>
    )
}