import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../../contexts/SalesContext'
import SalesChart from './modules/SalesChart';
import SalesGraph from './modules/SalesGraph';
import ItemDescription from './modules/ItemDescription';
import TopBar from './modules/TopBar';


export default function Sales (props) {

    const salesContext = useSalesContext()

    useEffect(() => {
        salesContext.getSalesData()
    }, [])

    return (
        <div>
            <TopBar/>
            <div id="ItemDescriptionPlacement"><ItemDescription/></div>
            <div id="SalesGraphPlacement"><SalesGraph/></div>
            <div id="SalesChartPlacement"><SalesChart/></div>
       </div>
    )
}