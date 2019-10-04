import React from 'react';

function Button({
  className,
  borderRadius,
  color,
  buttonCopy,
  url,
  buttonTextColor,
  margin,
  shadow
}) {
  return (
    <table
      align="center"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={{
        margin: margin ? margin : '0 auto 24px'
      }}
    >
      <tbody>
        <tr>
          <td
            className={className}
            align="center"
            bgcolor={color}
            style={{
              borderRadius: borderRadius
            }}
          >
            <a
              className="btn"
              href={url ? url : 'https://github.com/iammatthias/crepe'}
              style={{
                borderRadius: borderRadius,
                color: buttonTextColor,
                textDecoration: 'none',
                textAlign: 'center',
                padding: '12px 24px',
                display: 'inline-block',
                border: '1px solid ' + color
              }}
            >
              {buttonCopy}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Button;
