/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:hover': {
      backgroundColor: ' #a8a8a8 !important',
    },
  },
}))(TableRow);

export default function MyTable(props) {
  const {
    id, data, column, order, orderBy,
  } = props;

  const handleSort = (field) => () => {
    const { onSort } = props;
    onSort(field);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              column.map((item) => (
                <>
                  <TableCell key={item.label} align={item.align}>
                    <TableSortLabel
                      active={orderBy === item.field}
                      direction={order}
                      onClick={handleSort(item.field)}
                      align={item.align}
                    >
                      {item.label}
                    </TableSortLabel>
                  </TableCell>
                </>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((trainees) => (
            <StyledTableRow key={trainees[id]} hover={true}>
              {
                column.map((item) => (
                  <TableCell key={`${trainees[id]}${item.field}`} align={item.align}>
                    {item.format ? item.format(trainees[item.field]) : trainees[item.field] }
                  </TableCell>
                ))
              }
            </StyledTableRow>
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
  order: PropTypes.string,
  orderBy: PropTypes.string,
  onSort: PropTypes.func,
};
MyTable.defaultProps = {
  order: '',
  orderBy: '',
  onSort: () => {},
};
