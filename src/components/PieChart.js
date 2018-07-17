import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';

export class PieChart extends Component {

    render() {
        const { data, radius, cornerRadius, onClickCallBack } = this.props;
        return (
            <ResponsivePie
                data={data}
                margin={{
                    "top": 40,
                    "right": 80,
                    "bottom": 80,
                    "left": 80
                }}
                innerRadius={radius}
                padAngle={0.7}
                cornerRadius={cornerRadius}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
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
                legends={[
                    {
                        "anchor": "bottom",
                        "direction": "row",
                        "translateY": 56,
                        "itemWidth": 100,
                        "itemHeight": 18,
                        "symbolSize": 18,
                        "symbolShape": "circle"
                    }
                ]}
                onClick={onClickCallBack}
            />
        );
    }
}