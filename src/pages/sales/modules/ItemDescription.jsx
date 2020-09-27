import React, {useState, useEffect} from 'react'
import { useSalesContext } from '../../../contexts/SalesContext'
import '../index.css'

export default function ItemDescription (props) {

    const salesContext = useSalesContext()
    const [tags, setTags] = useState([])

    //generate description tags when sales data has been updated
    useEffect(() => {
        let newTags = []
        for (let i = 0; i < salesContext.salesData.tags.length; i++) {
            newTags.push(<div id="ItemDescriptionTag">{salesContext.salesData.tags[i]}</div>)
        }
        setTags(newTags)
    }, [salesContext.salesDataDirty])
    
    return (
        <div id="ItemDescriptionBox">
            <img id="ItemImage" src={salesContext.salesData.image}></img>
            <div id="ItemTitle">{salesContext.salesData.title}</div>
            <div id="ItemSubtitle">{salesContext.salesData.subtitle}</div>
            <div id="ItemDescriptionTags">{tags}</div>
        </div>
    )
}