import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';

export class BarChart extends Component {
    render() {
        const { keys, index, bottomLegend, leftLegend, data, groupMode, onClickCallBack } = this.props;

        return (
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy={index}
                margin={{
                    "top": 50,
                    "right": 130,
                    "bottom": 50,
                    "left": 60
                }}
                padding={0.3}
                groupMode={groupMode}
                colors="nivo"
                colorBy="id"
                borderColor="inherit:darker(1.6)"
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": bottomLegend,
                    "legendPosition": "center",
                    "legendOffset": 36
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": leftLegend,
                    "legendPosition": "center",
                    "legendOffset": -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="inherit:darker(1.6)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "dataFrom": "keys",
                        "anchor": "bottom-right",
                        "direction": "column",
                        "translateX": 120,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemsSpacing": 2,
                        "symbolSize": 20
                    }
                ]}
                theme={{
                    "tooltip": {
                        "container": {
                            "fontSize": "13px"
                        }
                    },
                    "labels": {
                        "textColor": "#555"
                    }
                }}
                onClick={onClickCallBack}
            />
        );
    }
}; 