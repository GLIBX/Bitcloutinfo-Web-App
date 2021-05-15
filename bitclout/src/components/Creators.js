import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { getBitcloutPrice, getProfiles } from "../server/service";

const computeCoinPrice = (coinPriceNanos) => {
  let price =
    (coinPriceNanos / 1000000000) * localStorage.getItem("bitclout_price");
  return `$ ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

const computeTotalUsdLocked = (bitcloutNanos) => {
  let result =
    (bitcloutNanos / 1000000000) * localStorage.getItem("bitclout_price");
  return `$ ${result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

const computeFounderReward = (basisPoints) => {
  let result = basisPoints / 100;
  return `${result.toFixed(0)}%`;
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "index",
    numeric: false,
    disablePadding: false,
    label: "#",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Username",
  },
  {
    id: "IsVerified",
    numeric: true,
    disablePadding: false,
    label: "Verified Status",
  },
  {
    id: "coinPrice",
    numeric: true,
    disablePadding: false,
    label: "Coin Price",
  },
  {
    id: "founderReward",
    numeric: true,
    disablePadding: false,
    label: "Founder's Reward",
  },
  {
    id: "totalUSDLocked",
    numeric: true,
    disablePadding: false,
    label: "Total USD Locked",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Top Bitclout Creators
      </Typography>

      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2vh",
    fontSize: "1rem",
    fontWeight: "bolder",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function CreatorsList() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("index");
  const [creators, setCreators] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, creators.length - page * rowsPerPage);

  const fetchProfiles = async () => {
    await Promise.all([getProfiles(), getBitcloutPrice()])
    .then((resp) => {
      localStorage.setItem("bitclout_price", resp[1]["bitclout_price"]);
      let newCreators = [];
      console.log(resp)

      for (const [index, creator] of resp[0].ProfilesFound.entries()) {
        newCreators.push({
          index: index + 1,
          name: creator.Username,
          profilePic: creator.ProfilePic,
          IsVerified: creator.IsVerified ? "✔️" : "❌",
          coinPrice: computeCoinPrice(creator.CoinPriceBitCloutNanos),
          founderReward: computeFounderReward(
            creator.CoinEntry.CreatorBasisPoints
          ),
          totalUSDLocked: computeTotalUsdLocked(
            creator.CoinEntry.BitCloutLockedNanos
          ),
          posts: creator.Posts,
        });
      }

      setCreators(newCreators)
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

  React.useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={creators.length}
            />
            <TableBody>
              {stableSort(creators, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.index}>
                      <TableCell align="left">{row.index}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.IsVerified}</TableCell>
                      <TableCell align="right">{row.coinPrice}</TableCell>
                      <TableCell align="right">{row.founderReward}</TableCell>
                      <TableCell align="right">{row.totalUSDLocked}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={creators.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
