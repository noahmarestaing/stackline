import React, {useState, useContext} from 'react'

export const SalesContext = React.createContext(null)

export function useSalesContext() {
    return useContext(SalesContext)
}

function SalesProvider(props) {

    //generates a graph point which can be plotted
    function generateNewGraphPoint(newX, newY) {
        return ({
            x: newX,
            y: newY
        })
    }

    //data from json fetch
    const [salesData, setSalesData] = useState({
        brand: "",
        details: [],
        id: "",
        image: "",
        retailer: "",
        reviews: [],
        sales: [],
        subtitle: "",
        tags: [],
        title: "",
    })
    //tells if salesData has been updated
    const [salesDataDirty, setSalesDataDirty] = useState(false)

    //graph data for the d3 sales graph
    const [retailSalesGraphData, setRetailGraphData] = useState([])
    const [wholesaleSalesGraphData, setWholesaleSalesGraphData] = useState([])
    const [retailerMarginGraphData, setRetailerMarginGraphData] = useState([])
    
    //bounds for the d3 sales graphs
    const [maxAmount, setMaxAmount] = useState(1)
    const [minAmount, setMinAmount] = useState(1000000)

    //checkbox booleans to choose what data to display on the graph
    const [retailChecked, setRetailChecked] = useState(true)
    const [wholesaleChecked, setWholesaleChecked] = useState(false)
    const [retailerMarginChecked, setRetailerMarginChecked] = useState(false)

    //fetch request for json data
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
            
            setSalesData(r[0])

            //go through sales data to get data for the graph
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
            
            //indicates that data has been updated
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