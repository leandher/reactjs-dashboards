import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { BarChart, LineChart, PieChart, AreaChart, ComposedChart } from '../../components/charts/index';

export class DashboardResult extends Component {

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
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                                <div className="text-value">9.823</div>
                                <div>Members online</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-primary">
                            <CardBody className="pb-0">
                                <div className="text-value">9.823</div>
                                <div>Members online</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-warning">
                            <CardBody className="pb-0">
                                <div className="text-value">9.823</div>
                                <div>Members online</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-danger">
                            <CardBody className="pb-0">
                                <div className="text-value">9.823</div>
                                <div>Members online</div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody className="pb-0 pl-0" >
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
                            <CardBody className="pb-0">
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
                            <CardBody className="pb-0 pl-0" >
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
                            <CardBody className="pb-0">
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
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody className="pb-0">
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}