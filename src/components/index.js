import React from "react";

import Table from "./table";
import Row from "./table-row";
import Cell from "./table-cell";
import Button from "./button";

const components = {
  Table: (props) => <Table {...props} />,
  Row: (props) => <Row {...props} />,
  Cell: (props) => <Cell {...props} />,
  Button: (props) => <Button {...props} />,
};
export default components;
