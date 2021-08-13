import React from "react";
import styled from "styled-email-components";

const Row = styled.tr``;

function StyledTableRow({ children, ...props }) {
  return <Row {...props}>{children}</Row>;
}

export default StyledTableRow;
