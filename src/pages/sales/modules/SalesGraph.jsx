import React, {useState, useEffect, useRef} from 'react'
import { useSalesContext } from '../../../contexts/SalesContext'
import * as d3 from 'd3'
import '../index.css'
import SalesGraphLegend from './SalesGraphLegend'

export const SalesGraph = (props) => {

    const salesContext = useSalesContext()
    const d3Container = useRef(null)

    let w = 875
    let h = 400

    useEffect(() => {
        const svg = d3.select(d3Container.current), 
            width = w,
            height = h;


        let maxAmount = salesContext.maxAmount + 2500000
        let minAmount = salesContext.minAmount - 1000000
        let minDate = 0
        let maxDate = 53

        let graph = svg.append('g')

        let xscale = d3.scaleLinear()
            .domain([minDate - 1, maxDate + 1])
            .range([0, width]);

        let yscale = d3.scaleLinear()
            .domain([minAmount, maxAmount])
            .range([height, 0]);

        let x_axis = d3.axisBottom(xscale)
            .ticks(10);

        let y_axis = d3.axisLeft(yscale)
            .ticks()

        let gX = graph.append('g')
            .call(x_axis)
            .attr("transform", "translate(0, 380)")
            .attr("color", "gray");

        var line = d3.line()
            .x(function(d, i) {
                return xscale(d.x);
            })
            .y(function(d, i) {
                return yscale(d.y);
            })
            .curve(d3.curveCatmullRom.alpha(.5));


        if (salesContext.retailChecked) {
            graph.append("path")
                .datum(salesContext.retailSalesGraphData)
                .attr("class", "line")
                .attr("d", line)
                .attr("fill", "none")
                .style("stroke", "blue")
                .style("stroke-width", "2");
        }

        if (salesContext.wholesaleChecked) {
            graph.append("path")
                .datum(salesContext.wholesaleSalesGraphData)
                .attr("class", "line")
                .attr("d", line)
                .attr("fill", "none")
                .style("stroke", "gray")
                .style("stroke-width", "2");
        }

        if (salesContext.retailerMarginChecked) {
            graph.append("path")
                .datum(salesContext.retailerMarginGraphData)
                .attr("class", "line")
                .attr("d", line)
                .attr("fill", "none")
                .style("stroke", "black")
                .style("stroke-width", "2");
        }
            
        return () => {
            svg.selectAll('*').remove();
        }
    }, [salesContext.salesDataDirty, salesContext.retailChecked, salesContext.wholesaleChecked, salesContext.retailerMarginChecked])

    

    return (
        <div id="SalesGraphBox">
            <div id="SalesGraphLegendPlacement"><SalesGraphLegend/></div>
            <svg
                className = "d3-component"
                width = {w}
                height = {h}
                ref = {d3Container}
            />
            <div>Week</div>
        </div>
    )
}

export default SalesGraph