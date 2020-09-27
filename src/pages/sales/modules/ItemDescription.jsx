import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../../../contexts/SalesContext'
import '../index.css'

export default function ItemDescription (props) {

    const salesContext = useSalesContext()

    let tags = []
    for (let i = 0; i < salesContext.salesData.tags.length; i++) {
        tags.push(<div id="ItemDescriptionTag">{salesContext.salesData.tags[i]}</div>)
    }

    

    return (
        <div id="ItemDescriptionBox">
            <img id="ItemImage" src={salesContext.salesData.image}></img>
            <div id="ItemTitle">{salesContext.salesData.title}</div>
            <div id="ItemSubtitle">{salesContext.salesData.subtitle}</div>
            <div id="ItemDescriptionTags">{tags}</div>
           
        </div>
    )
}