import React from "react";
import styled from "styled-email-components";

const Cell = styled.td`
  padding: 16px;
`;

function StyledTableCell({ children, ...props }) {
  return <Cell {...props}>{children}</Cell>;
}

export default StyledTableCell;
