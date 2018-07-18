import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';

export default class Chart extends Component {

    componentDidMount() {
        this.updateChart();
    }
   
    componentDidUpdate() {
        this.updateChart();
    }

    updateChart() {
        const { id, columns, chartType, areaType, timeseries } = this.props;

        let option = {
            bindto: '#' + id,
            data: {
                columns: columns,
                type: chartType
            }
        }

        if (areaType && areaType !== "") {
            const area = []
            columns.forEach(item => {
                area[item[0]] = areaType;
            });
            option.types = { ...area }
        }

        if(timeseries) {
            option.data = {
                x: 'x',
                columns: [
                    ['x', ...timeseries.dates],
                    ...option.data.columns
                ]
            }
            option.axis= {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: timeseries.format
                    }
                }
            }
        }
        c3.generate(option);
    }

    render() {
        return (
            <div id={this.props.id}></div>
        );
    }
}

Chart.propTypes = {
    id: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    chartType: PropTypes.string,
    areaType: PropTypes.string,
    timeseries: PropTypes.shape({
        dates: PropTypes.array,
        format: PropTypes.string
    })
};

Chart.defaultProps = {
    chartType: 'line',
    areaType: null,
    timeseries: null
};
