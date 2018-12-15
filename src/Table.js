import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableColgroup from './TableColgroup';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends React.PureComponent {
  getFixedLeftColumns() {
    const { columns } = this.props;
    return columns.filter((column) => column.fixed === 'left');
  }

  getFixedRightColumns() {
    const { columns } = this.props;
    return columns.filter((column) => column.fixed === 'right');
  }

  /**
   * Listen for scroll event in the middle table body, scrolling the
   * body of the left and right tables at the same time.
   */
  handleScroll = (event) => {
    const fixedLeftColumns = this.getFixedLeftColumns();
    const fixedRightColumns = this.getFixedRightColumns();
    if (fixedLeftColumns.length !== 0) {
      this.fixedLeftBody.scrollTop = event.target.scrollTop;
    }
    if (fixedRightColumns.length !== 0) {
      this.fixedRightBody.scrollTop = event.target.scrollTop;
    }
  }

  render() {
    const {
      classes,
      columns,
      className: classNamePro,
      data,
      isFixedHeaderAndScrollableBody,
    } = this.props;

    const fixedLeftColumns = this.getFixedLeftColumns();
    const fixedRightColumns = this.getFixedRightColumns();

    if (isFixedHeaderAndScrollableBody
      || fixedLeftColumns.length !== 0
      || fixedRightColumns.length !== 0
    ) {
      const rootClassName = classNames(
        'table',
        { 'table-scrollable': isFixedHeaderAndScrollableBody },
        classes.table,
        classNamePro,
      );
      const contentClassName = classNames(
        'table-content',
        { 'table-scrollable': isFixedHeaderAndScrollableBody },
        classes.tableContent,
      );
      const scrollClassName = classNames(
        'table-scroll',
        { 'table-scrollable': isFixedHeaderAndScrollableBody },
        classes.tableScroll,
      );
      const fixedLeftClassName = classNames(
        'table-fixed-left',
        { 'table-scrollable': isFixedHeaderAndScrollableBody },
        classes.tableFixedLeft,
      );
      const fixedRightClassName = classNames(
        'table-fixed-right',
        { 'table-scrollable': isFixedHeaderAndScrollableBody },
        classes.tableFixedRight,
      );
      const headerClassName = classNames(
        'table-header',
        { 'table-scrollable-header': isFixedHeaderAndScrollableBody },
      );
      const bodyClassName = classNames(
        'table-body',
        { 'table-scrollable-body': isFixedHeaderAndScrollableBody },
      );
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
              <div
                className={bodyClassName}
                onScroll={this.handleScroll}
                ref={c => { this.scrollBody = c; }}
              >
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
                  <div className={bodyClassName} ref={c => { this.fixedLeftBody = c; }}>
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
                  <div className={bodyClassName} ref={c => { this.fixedRightBody = c; }}>
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
      <div className={classNames('table', classNamePro)}>
        <table className="simple-table">
          <TableColgroup columns={columns} />
          <TableHeader columns={columns} />
          <TableBody columns={columns} data={data} />
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object,
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
  classes: {},
  isFixedHeaderAndScrollableBody: false,
};

export default Table;
