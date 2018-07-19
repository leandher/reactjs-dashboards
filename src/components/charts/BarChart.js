import React, { Component } from 'react';
import { BarChart as BarChartContainer, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import colors from '../../colors';

export default class BarChart extends Component {
    render() {
        const { data, keys, dataKey, orientation } = this.props;

        return (
            <ResponsiveContainer minHeight={300}>
                <BarChartContainer
                    data={data}
                    layout={orientation}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={dataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {
                        keys.map((key, index) => {
                            return (
                                <Bar
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    fill={colors[index]}
                                    stroke={colors[index]}
                                />
                            )
                        })
                    }
                </BarChartContainer>
            </ResponsiveContainer>
        );
    }
};

BarChart.propTypes = {
    data: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired,
    orientation: PropTypes.string

};

BarChart.defaultProps = {
    orientation: 'horizontal' // vertical
}