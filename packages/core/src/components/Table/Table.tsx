import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export interface TableData {
  id: number | string;
  [key: string]: any;
}

export interface TableProps {
  headers: string[];
  data: TableData[];
}

export const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  {row[header.toLowerCase()]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}; 