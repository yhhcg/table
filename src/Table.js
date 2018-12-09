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
      className: classNamePro,
      data,
      isFixedHeaderAndScrollableBody,
    } = this.props;

    const fixedLeftColumns = columns.filter((column) => column.fixed === 'left');
    const fixedRightColumns = columns.filter((column) => column.fixed === 'right');

    if (isFixedHeaderAndScrollableBody
      || fixedLeftColumns.length !== 0
      || fixedRightColumns.length !== 0
    ) {
      const rootClassName = classNames('table', {
        'table-scrollable-body': isFixedHeaderAndScrollableBody,
      }, classNamePro);
      const contentClassName = classNames('table-content', {
        'table-scrollable-body': isFixedHeaderAndScrollableBody,
      });
      const scrollClassName = classNames('table-scroll', {
        'table-scrollable-body': isFixedHeaderAndScrollableBody,
      });
      const fixedLeftClassName = classNames('table-fixed-left', {
        'table-scrollable-body': isFixedHeaderAndScrollableBody,
      });
      const fixedRightClassName = classNames('table-fixed-right', {
        'table-scrollable-body': isFixedHeaderAndScrollableBody,
      });
      const headerClassName = classNames({
        'table-header': isFixedHeaderAndScrollableBody,
      });
      const bodyClassName = classNames({
        'table-body': isFixedHeaderAndScrollableBody,
      });
      return (
        <div className={rootClassName}>
          <div className={contentClassName}>
            <div className={scrollClassName}>
              <div className={headerClassName}>
                <table className="table-header-table">
                  <TableColgroup columns={columns} />
                  <TableHeader columns={columns} />
                </table>
              </div>
              <div className={bodyClassName}>
                <table className="table-body-table">
                  <TableColgroup columns={columns} />
                  <TableBody columns={columns} data={data} />
                </table>
              </div>
            </div>
            {
              fixedLeftColumns.length !== 0 && (
                <div className={fixedLeftClassName}>
                  <div className={headerClassName}>
                    <table>
                      <TableColgroup columns={fixedLeftColumns} />
                      <TableHeader columns={fixedLeftColumns} />
                    </table>
                  </div>
                  <div className={bodyClassName}>
                    <table>
                      <TableColgroup columns={fixedLeftColumns} />
                      <TableBody columns={fixedLeftColumns} data={data} />
                    </table>
                  </div>
                </div>
              )
            }
            {
              fixedRightColumns.length !== 0 && (
                <div className={fixedRightClassName}>
                  <div className={headerClassName}>
                    <table>
                      <TableColgroup columns={fixedRightColumns} />
                      <TableHeader columns={fixedRightColumns} />
                    </table>
                  </div>
                  <div className={bodyClassName}>
                    <table>
                      <TableColgroup columns={fixedRightColumns} />
                      <TableBody columns={fixedRightColumns} data={data} />
                    </table>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      );
    }

    return (
      <table className={classNames('table', classNamePro)}>
        <TableColgroup columns={columns} />
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    width: PropTypes.string,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
  })).isRequired,
  isFixedHeaderAndScrollableBody: PropTypes.bool,
};

Table.defaultProps = {
  isFixedHeaderAndScrollableBody: false,
};

export default Table;
