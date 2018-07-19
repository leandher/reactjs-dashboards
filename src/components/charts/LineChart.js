import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart as LineChartContainer, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import colors from '../../colors';

export default class LineChart extends Component {
    render() {
        const { data, keys, dataKey, isDashed } = this.props;

        return (
            <ResponsiveContainer minHeight={300}>
                <LineChartContainer
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={dataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {
                        keys.map((key, index) => {
                            return (
                                <Line
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    fill={colors[index]}
                                    stroke={colors[index]}
                                    {...(isDashed ? { strokeDasharray: "5 5" } : {})}
                                />
                            )
                        })
                    }
                </LineChartContainer>
            </ResponsiveContainer>
        );
    }
};

LineChart.propTypes = {
    data: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired,
    isDashed: PropTypes.bool
};

LineChart.defaultProps = {
    isDashed: false
}