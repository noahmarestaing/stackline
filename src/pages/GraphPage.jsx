import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../contexts/SalesContext'

export default function GraphPage (props) {

    const salesContext = useSalesContext()

    return (
        <div>
            <button onClick={salesContext.getSalesData}>Get Data</button>
       </div>
    )
}