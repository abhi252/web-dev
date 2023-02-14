// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// export const getStaticProps = async () => {
//     const resut = await fetch("https://fakestoreapi.com/products");
//     const data = await resut.json();
//     console.log(data);
//     let ninjas;
//     return {
//         props : {ninj : data}
//     }
// }

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// const DenseTable= ({ninj}) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Ttile</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Description</TableCell>
//             <TableCell align="right">Category</TableCell>
//             <TableCell align="right">Rating</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {ninj.map((row) => (
//             <TableRow
//               key={row.id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.title}
//               </TableCell>
//               <TableCell align="right">{row.price}</TableCell>
//               <TableCell align="right">{row.description}</TableCell>
//               <TableCell align="right">{row.category}</TableCell>
//               <TableCell align="right">{row.rating}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// export default DenseTable;

import React,{useEffect,useState} from 'react'

export const getStaticProps = async () => {
    const resut = await fetch("https://fakestoreapi.com/products");
    const data = await resut.json();

    return {
        props : {ninjas: data}
    }
}

const data = ({ninjas}) => {
  return (
    <div>
    {ninjas && ninjas.map(ninja => (
        <div key={ninja.id}>
            <h3>{ninja.title}</h3>
        </div>
    ))}
    
    </div>
  )
}

export default data
