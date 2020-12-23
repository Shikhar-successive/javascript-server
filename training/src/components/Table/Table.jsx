import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function MyTable(props) {
  const classes = useStyles();
  const { id, data, column } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              column.map((item) => (
                <TableCell key={item.label} align={item.align}>{item.label}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((trainees) => (
            <TableRow key={trainees[id]}>
              {
                column.map((item) => (
                  <TableCell key={`${trainees[id]}${item.field}`} align={item.align}>
                    {trainees[item.field]}
                  </TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
MyTable.propTypes = {
  id: PropTypes.string.isRequired,
  column: PropTypes.arrayOf(Object).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
};
