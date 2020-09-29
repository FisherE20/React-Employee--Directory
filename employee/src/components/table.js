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
}