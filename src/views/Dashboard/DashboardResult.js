import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { BarChart, LineChart, PieChart, AreaChart, ComposedChart, LabelChart, TableChart } from '../../components';

export default class DashboardResult extends Component {

    constructor() {
        super();
        this.state = { data: [], pie: [] };
    }

    componentDidMount() {
        const data = [
            { name: 'www.site1.com', upload: 200, download: 200, total: 400, venda: 90 },
            { name: 'www.site2.com', upload: 100, download: 300, total: 400, venda: 50 },
            { name: 'www.site3.com', upload: 300, download: 200, total: 500, venda: 30 },
            { name: 'www.site4.com', upload: 400, download: 100, total: 500, venda: 70 }
        ]

        const pie = [
            [
                { name: 'www.site1.com', value: 200 },
                { name: 'www.site2.com', value: 100 },
                { name: 'www.site3.com', value: 300 },
                { name: 'www.site4.com', value: 400 }
            ]
        ]

        this.setState({ data: data, pie: pie});
    }

    render() {
        const { data, pie } = this.state;
        
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card>
                            <CardBody>
                                <LabelChart
                                    title={'Faturamento'}
                                    type={'currency'}
                                    value={12321421}
                                />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card>
                            <CardBody>
                                <LabelChart
                                    title={'EBITDA'}
                                    type={'currency'}
                                    value={10021421}
                                />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card>
                            <CardBody>
                                <LabelChart
                                    title={'Lucro Líquido(%)'}
                                    type={'percentage'}
                                    value={70.45344}
                                />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card>
                            <CardBody>
                                <LabelChart
                                    title={'Lucro Bruto'}
                                    type={'currency'}
                                    value={11021421}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody>
                                <LineChart
                                    data={data}
                                    dataKey={'name'}
                                    keys={['upload', 'download', 'total']}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody>
                                <BarChart
                                    data={data}
                                    dataKey={'name'}
                                    keys={['upload', 'download', 'total']}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody >
                                <PieChart
                                    data={pie}
                                    options={[{ key: 'value' }]}
                                    multicolor
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody>
                                <AreaChart
                                    data={data}
                                    dataKey={'name'}
                                    keys={['upload', 'download', 'total']}
                                    stacked
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody >
                                <ComposedChart
                                    data={data}
                                    dataKey={'name'}
                                    options={[
                                        { key: 'total', type: 'line' },
                                        { key: 'upload', type: 'area' },
                                        { key: 'download', type: 'bar' }
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody>
                                <TableChart
                                    data={data}
                                    columns={[
                                        {
                                            key: 'name',
                                            name: 'NAME',
                                            resizable: true,
                                            sortable: true
                                        },
                                        {
                                            key: 'upload',
                                            name: 'UPLOAD',
                                            resizable: true,
                                            sortable: true
                                        },
                                        {
                                            key: 'download',
                                            name: 'DOWNLOAD',
                                            resizable: true,
                                            sortable: true,
                                            width: 128
                                        },
                                        {
                                            key: 'total',
                                            name: 'TOTAL',
                                            resizable: true
                                        },
                                        {
                                            key: 'venda',
                                            name: 'VENDA',
                                            format: 'percent',
                                            resizable: true,
                                            width: 200
                                        }
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}