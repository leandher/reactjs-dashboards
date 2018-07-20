import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

export default class LabelChart extends Component {

    constructor() {
        super();
        this.renderCurrency = this.renderCurrency.bind(this);
        this.renderPercentage = this.renderPercentage.bind(this);
        this.renderProgressBar = this.renderProgressBar.bind(this);
        this.renderDefault = this.renderDefault.bind(this);
    }

    renderCurrency(value) {
        return (
            <Currency
                quantity={value}
                currency="BRL"
                decimal=","
                group="."
                locale="pt_BR"
            />
        )
    }

    renderPercentage(value) {
        return (
            <div>{Number(value).toFixed(2)}%</div>
        )
    }

    renderProgressBar(value) {
        const percentComplete = Number(value).toFixed(2) + '%';
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: percentComplete }}>
                    {percentComplete}
                </div>
            </div>
        )
    }

    renderDefault(value) {
        return (
            <div>{value}</div>
        )
    }

    renderValue(value, type) {
        switch (type) {
            case 'currency':
                return this.renderCurrency(value);
            case 'percentage':
                return this.renderPercentage(value);
            case 'progress':
                return this.renderProgressBar(value);
            default:
                return this.renderDefault(value);
        }
    }

    render() {
        const { title, value, type, onclick } = this.props;
        return (
            <div onClick={onclick}>
                <div className="text-md-right text-muted">
                    {title}
                </div>
                <div className="text-md-right text-value">
                    {this.renderValue(value, type)}
                </div>
            </div>
        )
    }
};

LabelChart.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    type: PropTypes.string,
    onclick: PropTypes.func
};

LabelChart.defaultProps = {
    title: '',
    value: 0,
    type: '',
    onclick: () => { }
}