import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
        <div className={classNames('table', 'table-fixed-header')}>
          <div className="table-header">
            <table className="table-header-table">
              <TableColgroup columns={columns} />
              <TableHeader columns={columns} />
            </table>
          </div>
          <div className="table-body">
            <table className="table-body-table">
              <TableColgroup columns={columns} />
              <TableBody columns={columns} data={data} />
            </table>
          </div>
        </div>
      );
    }

    return (
      <table className="table">
        <TableColgroup columns={columns} />
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    width: PropTypes.string,
  })).isRequired,
  data: PropTypes.array.isRequired,
  isFixedHeader: PropTypes.bool,
};

Table.defaultProps = {
  isFixedHeader: false,
};

export default Table;
