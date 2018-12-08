import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.PureComponent {
  render() {
    const {
      columns,
    } = this.props;

    return (
      <React.Fragment>
        <colgroup>
          {
            columns.map((column) => (
              <col
                key={column.key}
                style={{ width: column.width }}
              />
            ))
          }
        </colgroup>
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
      </React.Fragment>
    );
  }
}

TableHeader.propTypes = {

};

export default TableHeader;
