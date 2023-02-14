// import React,{useEffect,useState} from 'react'

// const Data = () => {
//     const [todo,setTodo] = useState();
//     useEffect(()=>{
//         getData();
//     },[])
//     const getData = async()=>{
//         const response = await fetch("https://fakestoreapi.com/products").then((response)=>response.json());
//         console.log(response[0]);
//         setTodo(response);
//     }
//   return (
//     <div>
//       {todo && todo.map((record)=>(
//         <div key={record.id}>
//             {record.title}
//         </div>
//     ))}
//     </div>
//   )
// }

// export default Data

import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material';


// const TableSection =  styled(Table)`
//   border: 2px solid black;
//   & > tr > td{
    
//   }
// `

export default function Data() {
    const [todo,setTodo] = useState();
    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const response = await fetch("https://fakestoreapi.com/products").then((response)=>response.json());
        console.log(response[0]);
        setTodo(response);
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:'grey'}}>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{}}>
          {todo && todo.map((row) => (
            <TableRow
              style={{}}
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{}} align="center">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
