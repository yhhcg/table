import React from 'react';
import PropTypes from 'prop-types';

class TableColgroup extends React.PureComponent {
  render() {
    const {
      columns,
    } = this.props;

    return (
      <colgroup>
        {
          columns.map((column) => (
            <col
              key={column.key}
              style={{
                width: column.width,
                maxWidth: column.width,
                minWidth: column.width,
              }}
            />
          ))
        }
      </colgroup>
    );
  }
}

TableColgroup.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default TableColgroup;
