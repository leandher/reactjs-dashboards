import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Chart from '../../components/charts/Chart';
export class DashboardResult extends Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        const data = [
            ['A', 4000, 2400, 2400, 1231, 2222, 3141],
            ['B', 3000, 1398, 2210, 1231, 2222, 3141],
            ['C', 2000, 9800, 2290, 1231, 2222, 3141],
            ['D', 2780, 3908, 2000, 1231, 2222, 3141],
            ['E', 1890, 4800, 2181, 1231, 2222, 3141],
            ['F', 2390, 3800, 2500, 1231, 2222, 3141],
            ['G', 3490, 4300, 2100, 1231, 2222, 3141]
        ]

        this.setState({ data: data });
    }

    render() {
        const { data } = this.state;
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
                        <Chart
                            id={"chart1"}
                            columns={data}
                            chartType={"bar"}
                        />
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <Chart
                            id={"chart2"}
                            columns={data}
                            chartType={"line"}
                            areaType={"area-spline"}
                            /* timeseries={{ format: '%d/%m', dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'] }} */
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}