import React from "react";
import styled from "styled-email-components";

const Table = styled.table`
  margin: 0 auto;
  width: 600px;
`;

function StyledTable({ children, ...props }) {
  return (
    <Table {...props}>
      <tbody>{children}</tbody>
    </Table>
  );
}

export default StyledTable;
