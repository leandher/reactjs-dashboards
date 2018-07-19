import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { BarChart, LineChart, PieChart, AreaChart, ComposedChart, LabelChart } from '../../components/index';
import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class DashboardEditable extends Component {

    constructor() {
        super();
        this.state = { data: [], pie: [] };
    }

    componentDidMount() {
        const data = [
            { name: 'www.site1.com', upload: 200, download: 200, total: 400 },
            { name: 'www.site2.com', upload: 100, download: 300, total: 400 },
            { name: 'www.site3.com', upload: 300, download: 200, total: 500 },
            { name: 'www.site4.com', upload: 400, download: 100, total: 500 }
        ]

        const pie = [
            [
                { name: 'www.site1.com', value: 200 },
                { name: 'www.site2.com', value: 100 },
                { name: 'www.site3.com', value: 300 },
                { name: 'www.site4.com', value: 400 }
            ]
        ]

        this.setState({ data: data, pie: pie });
    }

    render() {
        const { data, pie } = this.state;
        return (
            <div className="animated fadeIn">
                <ResponsiveReactGridLayout>
                    <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                                <LabelChart
                                    title={'Faturamento'}
                                    type={'currency'}
                                    value={12321421}
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div key="2" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                                <LabelChart
                                    title={'EBITDA'}
                                    type={'currency'}
                                    value={10021421}
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div key="3" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                                <LabelChart
                                    title={'Lucro Líquido(%)'}
                                    type={'percentage'}
                                    value={70.45344}
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div key="4" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                                <LabelChart
                                    title={'Lucro Bruto'}
                                    type={'currency'}
                                    value={11021421}
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div key="5" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0 pl-0" >
                                <LineChart
                                    data={data}
                                    dataKey={'name'}
                                    keys={['upload', 'download', 'total']}
                                />
                            </CardBody>
                        </Card>
                    </div>
                    <div key="6" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                                <BarChart
                                    data={data}
                                    dataKey={'name'}
                                    keys={['upload', 'download', 'total']}
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div key="7" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0 pl-0" >
                                <PieChart
                                    data={pie}
                                    options={[{ key: 'value' }]}
                                    multicolor
                                />
                            </CardBody>
                        </Card>
                    </div>
                    <div key="8" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                                <AreaChart
                                    data={data}
                                    dataKey={'name'}
                                    keys={['upload', 'download', 'total']}
                                    stacked
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div key="9" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0 pl-0" >
                                <ComposedChart
                                    data={data}
                                    dataKey={'name'}
                                    options={[
                                        { key: 'total', type: 'area' },
                                        { key: 'upload', type: 'line' },
                                        { key: 'download', type: 'bar' }
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </div>
                    <div key="10" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                        <Card>
                            <CardBody className="pb-0">
                            </CardBody>
                        </Card>
                    </div>
                </ResponsiveReactGridLayout>
            </div>

        );
    }
}