import React from 'react'
import { Header} from '../../Components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair} from '@syncfusion/ej2-react-charts'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'

const date1 = new Date('2017, 1, 1');
function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);


const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:text-white'>
      <Header category='Financial' title='Inflation Rate In Percentage'/>
      <div className='w-full'>
      </div>
      <ChartComponent
      id='financial-chart'
      height= '480px'
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      chartArea= {{border: {width: 0}}}
      crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
      tooltip= {{enable: true}}
      
      >
        <Inject services={[HiloSeries,Tooltip,DateTime, Zoom, Logarithmic, Crosshair]}/>
        <SeriesCollectionDirective>
        <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial