# Table

### 固定表头，表身纵向滚动
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
    <div class="table">
      <div class="table-header">
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-body">
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
这时候列不对齐，解决办法：  
	1、设置table的布局table-layout: fixed;  
	2、col标签设置列宽
这时候布局变成：
  ```html
    <div class="table">
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
### 固定第一列，表身横向滚动
**在第一列上覆盖一层一模一样的列**  
Dom结构成
```html
  <div class="table">
    <div class="table-content">
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
    <div class="table-fixed-left">
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
  </div>
```
这时候行不对齐，解决办法：  
	1、渲染完成和dom发生变化时，计算中间body每行的高度，设置给固定的那列  
这时候布局变成：
