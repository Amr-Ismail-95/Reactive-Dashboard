import React, { useState } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
  
  return (
      <ChartComponent
      id='line-chart'
      height= '480px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea= {{border: {width: 0}}}
      tooltip= {{enable: true}}
      
      >
        <Inject services={[DateTime, Legend, Tooltip, LineSeries]}/>
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    )
}

export default LineChart