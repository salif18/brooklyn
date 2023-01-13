import { createContext, useState } from "react";

const defaultValue ={
    panier:[],
    setPanier:'',
    btnAdd:()=>{}
}

const getPanier =localStorage.getItem('panier')
const PanierContext = createContext(defaultValue)

export  const PanierContextProvider =(props)=>{
    const [panier,setPanier]=useState(JSON.parse(getPanier))

    const handlerPanier =(pro)=>{
        setPanier([...panier ,{...pro ,qty:1}])
        localStorage.setItem('panier',JSON.stringify(panier))
    }

    const contextValue ={
        panier:panier,
        setPanier:setPanier,
        btnAdd:handlerPanier,
    }

    return(
        <PanierContext.Provider value={contextValue}>
        {props.children}
        </PanierContext.Provider>
    )
}

export default PanierContext