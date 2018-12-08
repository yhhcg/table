import React from 'react';
import PropTypes from 'prop-types';
import TableColgroup from './TableColgroup';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends React.PureComponent {
  render() {
    const {
      columns,
      data,
      isFixedHeader,
    } = this.props;

    if (isFixedHeader) {
      return (
        <div className="table">
          <div className="table-header">
            <table className="table-content">
              <TableColgroup columns={columns} />
              <TableHeader columns={columns} />
            </table>
          </div>
          <div className="table-body">
            <table className="table-content">
              <TableColgroup columns={columns} />
              <TableBody columns={columns} data={data} />
            </table>
          </div>
        </div>
      );
    }

    return (
      <table>
        <TableColgroup columns={columns} />
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  isFixedHeader: PropTypes.bool,
};

Table.defaultProps = {
  isFixedHeader: false,
};

export default Table;
