import React from 'react';

const tableStyle = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0'
  },
  td: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '0',
    textAlign: 'left'
  }
};

function Header({
  width,
  align,
  direction,
  children,
  className,
  bgcolor,
  style = {}
}) {
  return (
    <th
      width={width}
      dir={direction}
      align={align}
      bgcolor={bgcolor}
      style={{ ...tableStyle.td, ...style }}
      className={className}
    >
      {children}
    </th>
  );
}

function Cell({
  width,
  align,
  direction,
  children,
  className,
  bgcolor,
  background,
  style = {}
}) {
  return (
    <td
      width={width}
      dir={direction}
      align={align}
      bgcolor={bgcolor}
      background={background}
      style={{ ...tableStyle.td, ...style }}
      className={className}
    >
      {children}
    </td>
  );
}

function Spacer({
  width,
  align,
  direction,
  children,
  className,
  bgcolor,
  height,
  style = {}
}) {
  return (
    <td
      width={width}
      height={height}
      dir={direction}
      align={align}
      bgcolor={bgcolor}
      style={{ ...tableStyle.td, ...style }}
      className={className}
    >
      {children}
    </td>
  );
}

function Row({
  width,
  children,
  className,
  valign,
  align,

  style = {}
}) {
  return (
    <tr
      width={width}
      className={className}
      valign={valign}
      align={align}
      style={style}
    >
      {React.Children.map(children, el => {
        return el;
      })}
    </tr>
  );
}

function Grid({
  direction,
  className,
  children,
  bgcolor,
  background,
  style = {}
}) {
  return (
    <table
      dir={direction}
      style={{ ...tableStyle.table, ...style }}
      className={className}
      bgcolor={bgcolor}
      background=""
      border="0"
      cellSpacing="0"
      cellPadding="0"
    >
      <tbody>
        {React.Children.map(children, el => {
          if (!el) return;

          // We want this content the be on it's own row.
          if (el.type === Row) return el;

          // The content is all inside a single cell (so a row)
          if (el.type === Cell) {
            return <tr>{el}</tr>;
          }

          // The content is all inside a single cell (so a row)
          if (el.type === Header) {
            return <tr>{el}</tr>;
          }
          // The content is all inside a single cell (so a row)
          if (el.type === Spacer) {
            return <tr>{el}</tr>;
          }

          // The content is one cell inside it's own row
          return (
            <tr>
              <td style={{ ...tableStyle.td }}>{el}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Grid.Row = Row;
Grid.Cell = Cell;
Grid.Header = Header;
Grid.Spacer = Spacer;

export default Grid;
