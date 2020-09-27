import React, {useState, useEffect, useRef} from 'react'
import { useSalesContext } from '../../../contexts/SalesContext'
import * as d3 from 'd3'
import '../index.css'

export default function SalesGraph (props) {

    const salesContext = useSalesContext()
    const d3Container = useRef(null)

    let w = "30vw"
    let h = "60vh"

    useEffect(() => {
        const svg = d3.select(d3Container.current)
        width = parsInt(svg.style('width', 10))
        height = parseInt(svg.style('height', 10))
        aspect = width / height

        svg.attr('viewbox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'none')
            .call(resize)

        function resize() {
            const w = parseInt(svg.style('width'))
            svg.attr('width', w)
            svg.attr('height', math.round(w / aspect))
        }

        

        





    }, [])

    

    return (
        <div>
           
        </div>
    )
}