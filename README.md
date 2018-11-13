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
            <tr>s
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

  