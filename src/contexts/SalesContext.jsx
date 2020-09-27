import React, {useState, useContext} from 'react'

export const SalesContext = React.createContext(null)

export function useSalesContext() {
    return useContext(SalesContext)
}

function SalesProvider(props) {

    function getSalesData() {
        fetch(`${process.env.PUBLIC_URL}/data/Webdev_data2.json`)
        .then((r) => r.json())
        .then((data) =>{
            console.log(data)
        })
    }

    return (
        <SalesContext.Provider value={{
            getSalesData,
        }}>
        {props.children}
        </SalesContext.Provider>
    )
}

export default SalesProvider