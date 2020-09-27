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

    const [salesData, setSalesData] = useState([])
    const [salesDataDirty, setSalesDataDirty] = useState(false)

    const [retailSalesGraphData, setRetailGraphData] = useState([])
    const [wholesaleSalesGraphData, setWholesaleSalesGraphData] = useState([])
    const [retailerMarginGraphData, setRetailerMarginGraphData] = useState([])

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
            console.log(r[0])

            //parsing date string to push to list of sales data
            for (let i = 0; i < r[0].sales.length; i++) {
                // let month = r[0].sales[i].weekEnding.substring(5, 7)
                // month = parseInt(month, 10) - 1
                // console.log(month)
                // retailSalesGraphData[month].y = retailSalesGraphData[month].y + r[0].sales[i].retailSales
                // salesData[month].retailSales = salesData[month].retailSales + r[0].sales[i].retailSales
                // salesData[month].wholesaleSales = salesData[month].wholesaleSales + r[0].sales[i].wholesaleSales
                salesData.push(r[0].sales[i])
                retailSalesGraphData.push(generateNewGraphPoint(i, r[0].sales[i].retailSales))

            }
            setSalesDataDirty(!salesDataDirty)
            console.log(salesData)
            console.log(retailSalesGraphData)
        })
    }

    return (
        <SalesContext.Provider value={{
            getSalesData,
            salesData,
            salesDataDirty,
            retailSalesGraphData,
        }}>
        {props.children}
        </SalesContext.Provider>
    )
}

export default SalesProvider