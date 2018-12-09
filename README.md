# Table

### Simple table
Dom looks like this:
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

### Fixed header and scrollable body
  ```html
    <div>
      <div class="table-header">
        <table>
          <colgroup>
            <col></col>
          </colgroup>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-body">
        <table>
          <colgroup>
            <col></col>
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

The columns are not aligned. The following can solve this:  
  1. Table with table-layout: fixed;  
  2. Set column width using ``` <col> ```.

### Fixed columns and horizontally scrolling table

```html
  <div class="table">
    <div class="table-content">
      <div class="table-scroll"></div>
      <div class="table-fixed-left"></div>
      <div class="table-fixed-right"></div>
    </div>
  </div>
```
