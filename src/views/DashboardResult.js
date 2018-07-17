import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
export class DashboardResult extends Component {
    render() {
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
            </div>
        );
    }
}