import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../../../contexts/SalesContext'
import '../index.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function SalesGraphLegend (props) {

    const salesContext = useSalesContext()

    function renderCheck(checked) {
        if (checked) return <CheckBoxIcon/>
        else return <CheckBoxOutlineBlankIcon/>
    }

    return (
        <div id="SalesGraphLegendBox">
            <div id="RetailLegendRow" onClick={() => salesContext.setRetailChecked(!salesContext.retailChecked)}>{renderCheck(salesContext.retailChecked)} 
            <div id="GraphLegendText">Retail Sales</div></div>

            <div id="WholesaleLegendRow" onClick={() => salesContext.setWholesaleChecked(!salesContext.wholesaleChecked)}>{renderCheck(salesContext.wholesaleChecked)}
            <div id="GraphLegendText">Wholesale Sales</div></div>

            <div id="RetailerMarginLegendRow" onClick={() => salesContext.setRetailerMarginChecked(!salesContext.retailerMarginChecked)}>{renderCheck(salesContext.retailerMarginChecked)}
            <div id="GraphLegendText">Retailer Margin</div></div>
        </div>
    )
}