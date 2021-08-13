import React from "react";
import styled from "styled-email-components";
import ReactComment from "react-html-comment";

const Button = styled.a`
  background-color: #2a2b2b;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  padding: 24px 20px;
  color: #ffffff;
  border-radius: 4px;
  display: inline-block;
  min-width: 160px;
  miso-padding-alt: 0;
  span {
    mso-text-raise: 15pt;
  }
`;

function StyledTable({ href, children, ...props }) {
  return (
    <Button
      href={href}
      {...props}
      dangerouslySetInnerHTML={{
        __html: `<!--[if mso]><i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i><![endif]-->
          <span>${children}</span>
          <!--[if mso]><i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i><![endif]-->`,
      }}
    />
  );
}

export default StyledTable;
