# Table

### 固定表头，表身滚动
  把表格结构从
  ```html
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  ```
  拆分成
  ```html
    <div className="table">
      <div className="table-header">
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table-body">
        <table>
          <tbody>
              <tr>
                <td></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  ```
这时候出现列不对齐情况：
	1、设置table的布局table-layout: fixed;
	2、col标签设置列宽
这时候布局变成：
  ```html
    <div className="table">
      <div className="table-header">
        <table>
          <colgroup>
            <col style="width: 10%"></col>
          </colgroup>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table-body">
        <table>
          <colgroup>
            <col style="width: 10%"></col>
          </colgroup>
          <tbody>
              <tr>
                <td></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  ```
