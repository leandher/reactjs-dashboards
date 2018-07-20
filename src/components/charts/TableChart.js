import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import { Draggable, ToolsPanel } from 'react-data-grid-addons';

const { Container } = Draggable;
const { AdvancedToolbar, GroupedColumnsPanel } = ToolsPanel;

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
    constructor() {
        super();
        this.state = { originalRows: [], groupBy: [], expandedRows: {} }
    }

    handleGridSort = (sortColumn, sortDirection) => {
        let { data } = this.props;
        this.setState({ originalRows: data });
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
            }
        };

        const newData = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : data.sort(comparer);

        data = newData;
    };

    onColumnGroupAdded = (colName) => {
        const { columns } = this.props;
        let columnGroups = this.state.groupBy.slice(0);
        let activeColumn = columns.find((c) => c.key === colName)
        let isNotInGroups = columnGroups.find((c) => activeColumn.key === c.name) == null;
        if (isNotInGroups) {
            columnGroups.push({ key: activeColumn.key, name: activeColumn.name });
        }

        this.setState({ groupBy: columnGroups });
    };

    onColumnGroupDeleted = (name) => {
        let columnGroups = this.state.groupBy.filter(function (g) {
            return typeof g === 'string' ? g !== name : g.key !== name;
        });
        this.setState({ groupBy: columnGroups });
    };

    onRowExpandToggle = ({ columnGroupName, name, shouldExpand }) => {
        let expandedRows = Object.assign({}, this.state.expandedRows);
        expandedRows[columnGroupName] = Object.assign({}, expandedRows[columnGroupName]);
        expandedRows[columnGroupName][name] = { isExpanded: shouldExpand };
        this.setState({ expandedRows: expandedRows });
    };

    renderToolbar() {
        return (
            <AdvancedToolbar>
                <GroupedColumnsPanel groupBy={this.state.groupBy} onColumnGroupAdded={this.onColumnGroupAdded} onColumnGroupDeleted={this.onColumnGroupDeleted} />
            </AdvancedToolbar>
        );
    }

    render() {
        const { data, columns, groupColumns } = this.props;

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
            <Container>
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
                    onGridSort={this.handleGridSort}
                    onRowExpandToggle={this.onRowExpandToggle}
                    toolbar={(groupColumns ? this.renderToolbar() : '')}
                />
            </Container>
        )
    }
}

TableChart.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    groupColumns: PropTypes.bool
}

TableChart.defaultProps = {
    groupColumns: false
}