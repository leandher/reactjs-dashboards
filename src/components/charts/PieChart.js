import React, { Component } from 'react';
import { PieChart as PieChartContainer, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';
import PropTypes from 'prop-types';
import colors from '../../colors';

export default class PieChart extends Component {
    render() {
        const { data, options, multicolor, label, onclick } = this.props;

        return (
            <ResponsiveContainer minHeight={300}>
                <PieChartContainer
                    onclick={onclick}>
                    {
                        data.map((element, index) => {
                            return (
                                <Pie
                                    key={options[index].key}
                                    data={element}
                                    {...options[index]}
                                    dataKey={options[index].key}
                                    label={label}
                                >
                                    {
                                        element.map((entry, index) => {
                                            return (
                                                <Cell
                                                    key={entry.value}
                                                    fill={(multicolor ? colors[index] : '#8884d8')}
                                                />
                                            )
                                        })
                                    }
                                </Pie>
                            )
                        })
                    }
                    <Tooltip />
                    {(multicolor ? <Legend /> : '')}
                </PieChartContainer>
            </ResponsiveContainer>
        );
    }
};

PieChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.array).isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            outerRadius: PropTypes.number,
            innerRadius: PropTypes.number
        })
    ).isRequired,
    multicolor: PropTypes.bool,
    label: PropTypes.bool,
    onclick: PropTypes.func
};

PieChart.defaultProps = {
    options: [],
    multicolor: false,
    label: true,
    onclick: () => { }
}