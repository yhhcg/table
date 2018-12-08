import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.PureComponent {
  render() {
    const {
      columns,
    } = this.props;

    return (
      <thead>
        <tr>
          {
            columns.map((column) => (
              <th key={column.key}>
                {column.title}
              </th>
            ))
          }
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default TableHeader;
