import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import LineChart from '../../components/charts/lib/LineChart';
export class DashboardResult extends Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        const data = [
            { name: 'www.site1.com', upload: 200, download: 200, total: 400 },
            { name: 'www.site2.com', upload: 100, download: 300, total: 400 },
            { name: 'www.site3.com', upload: 300, download: 200, total: 500 },
            { name: 'www.site4.com', upload: 400, download: 100, total: 500 }
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

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}