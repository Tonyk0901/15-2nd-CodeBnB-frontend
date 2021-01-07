import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { flexCenter } from "../../../styles/Theme";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
}));

const PaginationRanges = ({ homesCount, paging }) => {
  const history = useHistory();
  const classes = useStyles();
  console.log(history.location.search.slice(1));

  const handleClick = e => {
    console.log(e.target.innerHTML.slice(0, 1));
  };

  return (
    <div className={classes.root}>
      <Pagination count={homesCount ? homesCount % 15 : 1} size="large" onClick={handleClick} />
      <PageRange>숙소 {homesCount ? homesCount : 0}개 중 1 - 15</PageRange>
      <AdditionalFee>추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</AdditionalFee>
    </div>
  );
};

const PageRange = styled.div`
  margin: 4px;
  font-size: ${props => props.theme.fontSizeSmall};
  font-weight: ${props => props.theme.fontWeightMedium};
`;

const AdditionalFee = styled.div`
  margin: 26px;
  font-size: ${props => props.theme.fontSizeExtrasmall};
  font-weight: ${props => props.theme.fontWeightRegular};
  color: #777;
`;

export default PaginationRanges;
