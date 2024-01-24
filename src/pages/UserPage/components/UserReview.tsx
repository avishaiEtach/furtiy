import {
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { getDate } from "../../../assets/util";
import { Link } from "react-router-dom";
import { replaceRouteParam, routesPath } from "../../../routes";
import StarIcon from "@mui/icons-material/Star";
import { Loader } from "../../../components/Loader/Loader";
import { useUserReview } from "../hooks/useUserReview";

export const UserReview = () => {
  const {
    columns,
    reviews,
    page,
    rowsPerPage,
    rows,
    handleChangePage,
    handleChangeRowsPerPage,
    loading,
  } = useUserReview();
  if (!reviews.length && !loading) {
    return (
      <div className="user__reviews__no__reviews__container"> no reviews</div>
    );
  }
  return (
    <div className="user__reviews__main__table">
      <Paper elevation={4} className="user__reviews__paper">
        <TableContainer className="user__reviews__table__container">
          <Table stickyHeader size="small" className="user__reviews__table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>
                    <span>{column}</span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody
              className={`user__reviews__table__body ${
                !loading ? "no__data" : ""
              }`}
            >
              {!loading ? (
                <div className="user__reviews__loader__container">
                  <Loader type="progress" fullHight />
                </div>
              ) : (
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <span className="flex user__reviews__product__name">
                          {row.prodName}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="user__reviews__review__text text__eclipse">
                          <p>{row.reviewText}</p>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="flex justify-center align-center g10">
                          <Rating
                            name="text-feedback"
                            value={row.reviewRating}
                            readOnly
                            precision={0.5}
                            emptyIcon={
                              <StarIcon
                                className="star__icon"
                                fontSize="inherit"
                              />
                            }
                          />
                          <span className="fs14">{`(${row.reviewRating.toFixed(
                            1
                          )})`}</span>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <span>{getDate(new Date(row.date))}</span>
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          to={replaceRouteParam(
                            routesPath.productPage,
                            row.prodId
                          )}
                          className="flex user__reviews__go__to__product__link"
                        >
                          click here
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="user__reviews__table__pagination"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
