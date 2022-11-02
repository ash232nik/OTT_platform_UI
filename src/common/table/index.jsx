import React from "react";
import "./index.scss";

const Table = ({ data = [], columns = [], rowOnClick }) => {
  return (
    <div className="tableContainer">
      <table className="mainTable">
        <thead>
          <tr>
            {columns.length > 0 &&
              columns.map((item) => {
                return <th>{item.title}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((mainItem, index) => {
              return (
                <tr onClick={() => rowOnClick(mainItem, index)}>
                  {columns.length > 0 &&
                    columns.map((item) => (
                      <td>
                        {item?.render
                          ? item?.render(
                              mainItem[item?.dataIndex ?? ""] ?? "",
                              mainItem,
                              index
                            )
                          : mainItem[item?.dataIndex ?? ""] ?? "--"}
                      </td>
                    ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
