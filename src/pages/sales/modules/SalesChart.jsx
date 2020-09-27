import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../../../contexts/SalesContext'
import '../index.css'

export default function SalesChart (props) {

    const salesContext = useSalesContext()
    const [chartRows, setChartRows] = useState([])

    useEffect(() => {
        let newChartRows = []
        for (let i = 0; i < salesContext.salesData.length; i++) {
            newChartRows.push(
                <div id="DataRow">
                    <div id="DataField">{salesContext.salesData[i].weekEnding}</div>
                    <div id="DataField">${salesContext.salesData[i].retailSales.toLocaleString(undefined, {maximumFractionDigits:0})}</div>
                    <div id="DataField">${salesContext.salesData[i].wholesaleSales.toLocaleString(undefined, {maximumFractionDigits:0})}</div>
                    <div id="DataField">${salesContext.salesData[i].unitsSold.toLocaleString(undefined, {maximumFractionDigits:0})}</div>
                    <div id="DataField">${salesContext.salesData[i].retailerMargin.toLocaleString(undefined, {maximumFractionDigits:0})}</div>
                </div>
            )
        }

        setChartRows(newChartRows)
    }, [salesContext.salesDataDirty])

    return (
        <div>
            <div id="DataRow">
                <div id="TitleField">Week Ending</div>
                <div id="TitleField">Retail Sales</div>
                <div id="TitleField">Wholesale Sales</div>
                <div id="TitleField">Units Sold</div>
                <div id="TitleField">Retailer Margin</div>
            </div>
            {chartRows}
        </div>
    )
}