import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        minWidth: 4,
    },
});

export default function DenseTable({children}) {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <div className="nav">
            <Typography variant="h4" component='h1'>Richest List</Typography>
            <Typography variant="overline">
                <a href="mailto:dev.iProger@gmail.com">
                    <small>by Lazizbek</small>
                </a>
            </Typography>
        </div>
        <Table className={classes.table} size="small" aria-label="a dense table" color='dark'>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">Image</TableCell>
              <TableCell component="th" scope="row">Rank</TableCell>
              <TableCell component="th" scope="row">Name</TableCell>
              <TableCell component="th" scope="row">Company</TableCell>
              <TableCell component="th" scope="row" align="right">industries</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }