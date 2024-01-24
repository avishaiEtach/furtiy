import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "./PaginationMui.scss";

interface PaginationMuiProps {
  maxPage: number;
  limit: number;
  page: number;
  onChange: (event: any, value: number) => void;
}

export const PaginationMui = ({
  maxPage,
  limit,
  page,
  onChange,
}: PaginationMuiProps) => {
  return (
    <Pagination
      className="pagination"
      count={Math.ceil(maxPage / limit)}
      variant="outlined"
      page={page}
      onChange={onChange}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: BsArrowLeft, next: BsArrowRight }}
          {...item}
        />
      )}
    />
  );
};
