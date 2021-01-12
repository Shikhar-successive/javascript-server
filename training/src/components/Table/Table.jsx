/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[200],
    },
    '&:hover': {
      backgroundColor: ' #a8a8a8 !important',
    },
  },
}))(TableRow);

export default function MyTable(props) {
  const {
    id,
    data,
    column,
    order,
    orderBy,
    count,
    page,
    onPageChange,
    rowsPerPage,
    actions,
    onSelect,
  } = props;

  const handleSort = (field) => () => {
    const { onSort } = props;
    onSort(field);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow key={`${id}`}>
            {
              column.map((item, index) => (
                <>
                  <TableCell key={`${item.field}${index + 1}`} align={item.align}>
                    <TableSortLabel
                      active={orderBy === item.field}
                      direction={order}
                      onClick={handleSort(item.field)}
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
            <StyledTableRow key={trainees.id} hover={true} onClick={() => onSelect(trainees)}>
              {
                column.map((item, index) => (
                  <>
                    <TableCell key={`${trainees[id]}${item.field}${index + 1}`} align={item.align}>
                      {item.format ? item.format(trainees[item.field]) : trainees[item.field] }
                      {item.label === 'Date' ? actions.map((action, indexes) => (
                        <>
                          <Button key={`${trainees.email}${item.label}${indexes + 1}`} variant="text" onClick={() => action.handler(trainees)}>
                            {action.icon}
                          </Button>
                        </>
                      )) : '' }
                    </TableCell>
                  </>
                ))
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        onChangePage={onPageChange}
      />
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
  onPageChange: PropTypes.func,
  rowsPerPage: PropTypes.number,
  count: PropTypes.number,
  page: PropTypes.number,
  actions: PropTypes.arrayOf(PropTypes.any),
  onSelect: PropTypes.func.isRequired,
};
MyTable.defaultProps = {
  order: '',
  orderBy: '',
  onSort: () => {},
  onPageChange: () => {},
  rowsPerPage: 10,
  count: 0,
  page: 1,
  actions: [],
};
