import React from "react";
import styled from "styled-email-components";

import Components from "./components/index";

const Wrapper = styled.center`
  font-family: sans-serif;
  background: #f7f4f2;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  padding: 16px;
`;

const Content = styled(Components.Table)`
  background: #fff;
`;

function Email() {
  return (
    <Wrapper>
      <Content>
        <Components.Row>
          <Components.Cell>
            foo
            <br />
            <br />
            <Components.Button href='https://tornado.com/'>Button</Components.Button>
          </Components.Cell>
        </Components.Row>
      </Content>
    </Wrapper>
  );
}

export default Email;
