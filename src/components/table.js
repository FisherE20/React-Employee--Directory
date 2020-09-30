import React from "react";
import Header from "./header";
import {useTable, useSortBy} from "react-table";
import "./style.css";
import Search from "./search"

const employees = [
    {name: "John Doe", Department: "Sales", email: "JDoe@" },
    {name: "Mike Chan", Department: "Sales", email: "MChan" },
    {name: "Ashley Rodriguez", Department: "Engineering", email: "ARodriguez@" },
    {name: "Kevin Tupik", Department: "Engineering", email: "KTupik@" },
    {name: "Malia Brown", Department: "Finance", email: "MBrown@" },
    {name: "Sarah Lourd", Department: "Legal", email: "SLourd@" },
    {name: "Tom Allen", Department: "Legal", email: "TAllen@" },
    {name: "Tammer Galal", Department: "Engineering", email: "TGalal@" },
    {name: "John Fisher", Department: "Human Resources", email: "JFisher@" },
    {name: "Megan Dooher", Department: "Marketing", email: "MDooher@" }
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
                accessor : "depasrtment",
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
        perpareRow,
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
                    perpareRow(row);
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
