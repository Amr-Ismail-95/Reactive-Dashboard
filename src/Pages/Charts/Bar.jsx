import React from 'react'
import { Header} from '../../Components'
import { DataLabel, ColumnSeries, Category, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip} from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'



const Bar = () => {
  return (
<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:text-white'>
      <Header category='Bar' title='Olympic Medal Counts - RIO'/>
      <div className='w-full'>
      </div>
      <ChartComponent
      id='chart'
      height= '480px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea= {{border: {width: 0}}}
      tooltip= {{enable: true}}
      
      >
        <Inject services={[DateTime, Legend, ColumnSeries, Category, DataLabel, Tooltip ]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
      )
}

export default Bar