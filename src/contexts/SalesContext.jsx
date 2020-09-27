import React, {useState, useContext} from 'react'

export const SalesContext = React.createContext(null)

export function useSalesContext() {
    return useContext(SalesContext)
}

function SalesProvider(props) {

    // function generateNewSalesPoint(newRetailSales, newRetailMargin, newUnitsSold, newWeekEnding, newWholesaleSales) {
    //     return (
    //         {
    //             retailSales: newRetailSales,
    //             retailMargin: newRetailMargin,
    //             unitsSold: newUnitsSold,
    //             weekEnding: newWeekEnding,
    //             wholesaleSales: newWholesaleSales
    //         }
    //     )
    // }

    function generateNewGraphPoint(newX, newY) {
        return ({
            x: newX,
            y: newY
        })
    }

    const [salesData, setSalesData] = useState({
        sales: [],
        description: "",
        tags: [],

    })
    const [salesDataDirty, setSalesDataDirty] = useState(false)

    const [retailSalesGraphData, setRetailGraphData] = useState([])
    const [wholesaleSalesGraphData, setWholesaleSalesGraphData] = useState([])
    const [retailerMarginGraphData, setRetailerMarginGraphData] = useState([])
    
    const [maxAmount, setMaxAmount] = useState(1)
    const [minAmount, setMinAmount] = useState(1000000)

    const [retailChecked, setRetailChecked] = useState(true)
    const [wholesaleChecked, setWholesaleChecked] = useState(false)
    const [retailerMarginChecked, setRetailerMarginChecked] = useState(false)

    function getSalesData() {
        fetch(`${process.env.PUBLIC_URL}/data/Webdev_data2.json`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
            })
        }).then(r => {
            return r.json()
        }).then(r => {
            

            //parsing date string to push to list of sales data
            setSalesData(r[0])
            console.log(r[0])
            for (let i = 0; i < r[0].sales.length; i++) {
                
                if (r[0].sales[i].retailSales > maxAmount) setMaxAmount(r[0].sales[i].retailSales)
                if (r[0].sales[i].retailSales < minAmount) setMinAmount(r[0].sales[i].retailSales)
                retailSalesGraphData.push(generateNewGraphPoint(i, r[0].sales[i].retailSales))

                if (r[0].sales[i].wholesaleSales > maxAmount) setMaxAmount(r[0].sales[i].wholesaleSales)
                if (r[0].sales[i].wholesaleSales < minAmount) setMinAmount(r[0].sales[i].wholesaleSales)
                wholesaleSalesGraphData.push(generateNewGraphPoint(i, r[0].sales[i].wholesaleSales))

                if (r[0].sales[i].retailerMargin > maxAmount) setMaxAmount(r[0].sales[i].retailerMargin)
                if (r[0].sales[i].retailerMargin < minAmount) setMinAmount(r[0].sales[i].retailerMargin)
                retailerMarginGraphData.push(generateNewGraphPoint(i, r[0].sales[i].retailerMargin))

            }
            console.log("sales")
            console.log(salesData)
            setSalesDataDirty(!salesDataDirty)
            
        })
    }

    return (
        <SalesContext.Provider value={{
            getSalesData,
            salesData,
            salesDataDirty,
            retailSalesGraphData,
            wholesaleSalesGraphData,
            retailerMarginGraphData,
            maxAmount,
            minAmount,

            retailChecked, setRetailChecked,
            wholesaleChecked, setWholesaleChecked,
            retailerMarginChecked, setRetailerMarginChecked,
        }}>
        {props.children}
        </SalesContext.Provider>
    )
}

export default SalesProvider