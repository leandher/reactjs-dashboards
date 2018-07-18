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
        const { id, columns, chartType, lineStyle, timeseries, groups, title, combination, colorPattern,
            onclickCallBack, showLabel, json, keys } = this.props;

        let option = {
            bindto: '#' + id,
            data: {
                x: (timeseries ? 'x' : null),
                columns: (timeseries ? [['x', ...timeseries.dates], ...columns] : columns),
                json: json,
                keys: keys,
                type: chartType,
                groups: (groups ? [groups] : []),
                onclick: onclickCallBack
            },
            donut: (title ? { title: title, label: { show: showLabel } } : null),
            pie: { label: { show: showLabel } },
            gauge: { label: { show: showLabel } },
            axis: (timeseries ? {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: timeseries.format
                    }
                }
            } : { x: { type: 'category' } }),
            color: (colorPattern ? { pattern: colorPattern } : null)
        }

        if (lineStyle && lineStyle !== "") {
            const area = []
            columns.forEach(item => {
                area[item[0]] = lineStyle;
            });
            option.data.types = { ...area }
        }

        if (combination) {
            option.data.types = { ...option.data.types, ...combination }
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
    columns: PropTypes.array,
    json: PropTypes.array,
    keys: PropTypes.object,

    chartType: PropTypes.string,
    lineStyle: PropTypes.string,
    timeseries: PropTypes.shape({
        dates: PropTypes.array.isRequiredS,
        format: PropTypes.string
    }),
    groups: PropTypes.array,
    title: PropTypes.string,
    combination: PropTypes.object,
    colorPattern: PropTypes.array,
    onclickCallBack: PropTypes.func,
    showLabel: PropTypes.bool
};

Chart.defaultProps = {
    columns: null,
    json: null,
    keys: null,
    chartType: 'line',
    lineStyle: null,
    timeseries: null,
    groups: null,
    title: null,
    combination: null,
    colorPattern: null,
    onclickCallBack: () => { },
    showLabel: true
};

/* 
    ChartType: line, pie, donut, bar, gauge, spline(line curved)
    lineStyle: area, line, spline, area-spline, step, area-step
    combination: {lineName: lineStyle} => lineName = primeiro objeto de columns
    Keys: {x: 'atributo', value: [atributos]}
*/