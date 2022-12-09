import {MainContainer, Card, CardContainer} from "./HomePageStyled"
import {useState, useEffect} from 'react'
import {Cart} from "../Cart/Cart"
import {Filter} from "../Filter/Filter"

export function HomePage (props){

  const products = [{
    id: 1,
    nome: "Baby-Yoda Star Wars",
    preco: 222.99,
    imagem: "https://m.media-amazon.com/images/I/71-RNACX5hL._AC_UL320_.jpg",

  },{
    id: 2,
    nome: "Funko Pop! Star Wars Darth Vader",
    preco: 299.90,
    imagem: "https://m.media-amazon.com/images/I/61yIksRiYmL._AC_SL1200_.jpg",

  },{
    id: 3,
    nome: "Kit de Construção LEGO Star Wars",
    preco: 318.36,
    imagem: "https://m.media-amazon.com/images/I/81mh4nC99TL._AC_UL480_FMwebp_QL65_.jpg",

  },{
    id: 4,
    nome: "Starfighter Mandaloriano LEGO Star Wars",
    preco: 439.99,
    imagem: "https://m.media-amazon.com/images/I/81mcKaWvBpL._AC_SL1500_.jpg",
  },{
    id: 5,
    nome: "Luminária LED 3D Darth Vader",
    preco: 64.90,
    imagem: "https://m.media-amazon.com/images/I/812CVJypukL._AC_SL1500_.jpg", 
  }]
 
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("") 

  const productsFiltradosTela = products
  .filter((product) => product.nome.includes(pesquisa))
  .filter((product) => product.preco >= valorMinimo)
  .filter((product) => {return valorMaximo ? product.preco <= valorMaximo:product})
  .sort((a,b) =>{
    switch(ordem){
      case "Maior":
        if (a.preco < b.preco){
          return 1
        }else{
          return -1
        }
      case "Menor":
        if(a.preco<b.preco){
          return -1
        }else{
          return 1
        }
    }
  })
  
    const onChangeCart = (event)=>{
      props.setCart(event.target.value)
    }

    const onChangeOrdem =(event)=>{
      setOrdem(event.target.value)
    }

    const compraproduct = (product) =>{
      const novoCart = [...props.cart]
      const productAdicionado = product
      const productExistente = novoCart.find((product)=>{
          return product.id === productAdicionado.id 
      })
          if (productExistente){
            productExistente.quantidade++
            productExistente.precototal = productExistente.quantidade * productExistente.preco
          }else{
            novoCart.push({...productAdicionado, quantidade: 1, precototal: productAdicionado.preco})
          } 
        props.setCart(novoCart)
    }

    useEffect(() => {
          if(props.cart.length>0){
          const listaStringCart = JSON.stringify(props.cart)
          localStorage.setItem("Cart",listaStringCart)
        }
        },[props.cart])

    useEffect(() => {
        const novoCart = JSON.parse(localStorage.getItem("Cart"))
          if(novoCart !== null){
            props.setCart(novoCart)
          }   
    },[])
   

    return(
        <>
        <Filter
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
        />
        <MainContainer>
          <div className="MainContainer-topo">
            <div>
            <h3>
              Resultado da busca:
            </h3>
            <p>
              {productsFiltradosTela.length} produtos
            </p>
            </div>
            <div>
            <select value={ordem} onChange={onChangeOrdem} className="MainContainer-topo-select">
              <option value="">Ordenar por</option>
              <option value="Maior">Preço: do maior para o menor</option>
              <option value="Menor">Preço: do menor para o maior</option>
            </select>
            </div>
          </div>
        <CardContainer>

          {productsFiltradosTela
          .map((product, index)=>{
            return(
            <Card key={index}>
            <div>
                <img src={product.imagem} alt="product-display"/>
            </div>
            <div>
                <span>{product.nome}</span><br/>
                <h3>R$ {product.preco.toFixed(2)}</h3><br/>
                <button onClick={()=>compraproduct(product)} onChange={onChangeCart}>Comprar</button>             
            </div>
            </Card>)
          })}

        </CardContainer>
        </MainContainer>
        <Cart
        shopping={props.cart}
        setShopping={props.setCart}
        />
        </>
    )
}

