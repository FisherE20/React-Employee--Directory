import React from "react";
import Header from "./header";
import {useTable, useSortBy} from "react-table";
import "./style.css";
import Search from "./search"

const employees = [
    {name: "John Doe", department: "Sales", email: "JDoe@ReileyEngineering.com" },
    {name: "Mike Chan", department: "Sales", email: "MChan@ReileyEngineering.com" },
    {name: "Ashley Rodriguez", department: "Engineering", email: "ARodriguez@ReileyEngineering.com" },
    {name: "Kevin Tupik", department: "Engineering", email: "KTupik@ReileyEngineering.com" },
    {name: "Malia Brown", department: "Finance", email: "MBrown@ReileyEngineering.com" },
    {name: "Sarah Lourd", department: "Legal", email: "SLourd@ReileyEngineering.com" },
    {name: "Tom Allen", department: "Legal", email: "TAllen@ReileyEngineering.com" },
    {name: "Tammer Galal", department: "Engineering", email: "TGalal@ReileyEngineering.com" },
    {name: "John Fisher", department: "Human Resources", email: "JFisher@ReileyEngineering.com" },
    {name: "Megan Dooher", department: "Marketing", email: "MDooher@ReileyEngineering.com" }
]

function Table () {
    const data= employees

    const columns = React.useMemo(
        () => [
            {
                Header : "Name",
                accessor : "name",
            },
            {
                Header : "Department",
                accessor : "department",
            },
            {
                Header : "Email",
                accessor : "email",
            }
            
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
        )
        const firstPageRows = rows.slice(0,20)

        return (
            <>
            < Header />
            < Search />
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      // Add the sorting props to control sorting. For this example
                      // we can add them into the header props
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {firstPageRows.map(
                  (row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          )
                        })}
                      </tr>
                    )}
                )}
              </tbody>
            </table>
            <br />
           
          </>
          )
        }
        
        export default Table;
