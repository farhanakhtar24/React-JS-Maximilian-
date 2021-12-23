import React from "react";

import ChartBar from './chartBar'
import './chart.css'

const Chart = function (props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            { props.dataPoints.map(dataPoint => {
                return <ChartBar
                    key={ dataPoint.id }
                    value={ dataPoint.value }
                    maxValue={ totalMaximum }
                    label={ dataPoint.label }
                ></ChartBar>
            })
            }
        </div>
    );
}

export default Chart;