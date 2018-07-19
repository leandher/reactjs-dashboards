import React, { Component } from 'react';
import { AreaChart as AreaChartContainer, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export class AreaChart extends Component {

    render() {
        /* Data = [{ x:value, ...yValues }, ...] */
        const { data, keys, activeDot } = this.props;
        const x = keys.filter(key => key === 'x')[0];

        if (data.length > 0 && keys.length > 0) {

            return (
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChartContainer data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={x} />
                        <YAxis />
                        <Tooltip />
                        {
                            keys.slice(1).map((key, index) => {
                                return (
                                    <Area key={key} type='monotone' dataKey={key} stackId="1" activeDot={activeDot} />
                                )
                            })
                        }
                    </AreaChartContainer>
                </ResponsiveContainer>
            );
        } else {
            return ('');
        }
    }
}