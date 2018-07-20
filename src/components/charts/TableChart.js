import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';

// Custom Formatter component
class PercentCompleteFormatter extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired
    };

    render() {
        const percentComplete = this.props.value + '%';
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: percentComplete }}>
                    {percentComplete}
                </div>
            </div>
            );
    }
}

export default class TableChart extends Component {

    render() {
        const { data, columns } = this.props;
        columns.forEach(col => {
            switch (col.format) {
                case 'percent':
                    col.formatter = PercentCompleteFormatter;
                    break;
                default:
                    break;
            }
        });
        return (
            <ReactDataGrid
                ref={node => this.grid = node}
                enableCellSelect={true}
                enableDragAndDrop={true}
                columns={columns}
                rowGetter={(index) => { return data[index] }}
                rowsCount={data.length}
                rowHeight={50}
                minHeight={300}
                minWidth={500}
            />
        )
    }
}