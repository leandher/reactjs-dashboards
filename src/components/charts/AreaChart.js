import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AreaChart as AreaChartContainer, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import colors from '../../colors';

export default class AreaChart extends Component {

    toPercent = (decimal, fixed = 0) => {
        return `${(decimal / 10).toFixed(fixed)}%`;
    };

    render() {
        const { data, keys, dataKey, stacked, percent, orientation, onclick } = this.props;

        return (
            <ResponsiveContainer minHeight={300}>
                <AreaChartContainer
                    data={data}
                    layout={orientation}
                    onclick={onclick}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={dataKey} />
                    <YAxis  {...(percent ? { tickFormatter: this.toPercent } : {})} />
                    <Tooltip />
                    <Legend />
                    {
                        keys.map((key, index) => {
                            return (
                                <Area
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    fill={colors[index]}
                                    stroke={colors[index]}
                                    {...(stacked ? { stackId: "1" } : {})}
                                />
                            )
                        })
                    }
                </AreaChartContainer>
            </ResponsiveContainer>
        );
    }
};

AreaChart.propTypes = {
    data: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired,
    stacked: PropTypes.bool,
    percent: PropTypes.bool,
    orientation: PropTypes.string,
    onclick: PropTypes.func
};

AreaChart.defaultProps = {
    stacked: false,
    percent: false,
    orientation: 'horizontal', // vertical
    onclick: () => { }
}