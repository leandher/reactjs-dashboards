import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ComposedChart as ComposedChartContainer, XAxis, YAxis, Tooltip, Legend, Area, Bar, Line, CartesianGrid } from 'recharts';
import colors from '../../colors';

export default class ComposedChart extends Component {

    constructor() {
        super();
        this.renderArea = this.renderArea.bind(this);
        this.renderBar = this.renderBar.bind(this);
        this.renderCharts = this.renderCharts.bind(this);
        this.renderLine = this.renderLine.bind(this)
    }

    renderArea(key, color) {
        return (
            <Area
                key={key}
                type="monotone"
                dataKey={key}
                fill={color}
                stroke={color}
            />
        )
    }

    renderBar(key, color) {
        return (
            <Bar
                key={key}
                type="monotone"
                dataKey={key}
                fill={color}
                stroke={color}
            />
        )
    }

    renderLine(key, color) {
        return (
            <Line
                key={key}
                type="monotone"
                dataKey={key}
                fill={color}
                stroke={color}
            />
        )
    }

    renderCharts(option, color) {
        switch (option.type) {
            case 'area':
                return this.renderArea(option.key, color);

            case 'bar':
                return this.renderBar(option.key, color);

            case 'line':
                return this.renderLine(option.key, color);

            default:
                return this.renderLine(option.key, color);

        }
    }

    render() {
        const { data, options, dataKey, orientation, onclick } = this.props;
        return (
            <ResponsiveContainer minHeight={300}>
                <ComposedChartContainer
                    data={data}
                    layout={orientation}
                    onclick={onclick}
                >
                    <XAxis dataKey={dataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    {
                        options.map((option, index) => {
                            return (
                                this.renderCharts(option, colors[index])
                            )
                        })
                    }
                </ComposedChartContainer>
            </ResponsiveContainer>
        );
    }
};

ComposedChart.propTypes = {
    data: PropTypes.array.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            type: PropTypes.string // line, area, bar
        })
    ).isRequired,
    orientation: PropTypes.string,
    onclick: PropTypes.func
};

ComposedChart.defaultProps = {
    options: [{
        type: 'line'
    }],
    orientation: 'horizontal', // vertical
    onclick: () => { }
}