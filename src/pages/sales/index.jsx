import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../../contexts/SalesContext'
import SalesChart from './modules/SalesChart';


export default function Sales (props) {

    const salesContext = useSalesContext()

    useEffect(() => {
        salesContext.getSalesData()
    }, [])

    return (
        <div>
            <SalesChart/>
       </div>
    )
}