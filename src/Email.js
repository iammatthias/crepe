import React from "react";

import Grid from "./components/Grid";
import Button from "./components/Button";
import Img from "./components/Img";
import Feature from "./components/Feature";

const style = {
  container: {
    margin: "0 auto",
    width: "600px",
    padding: "0"
  },
  body: {
    padding: "32px"
  },
  footerCopy: {
    fontSize: "11px",
    lineHeight: "14px",
    margin: "0 0 16px",
    textAlign: "left"
  }
};

const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#696969",
  greyLight: "#f2f2f2",
  greyDark: "#242424"
};

const images = {
  logo: "https://picsum.photos/120/40",
  hero: "https://picsum.photos/600/700",
  feature: "https://picsum.photos/300/500"
};

function Email() {
  return (
    <center
      style={{ backgroundColor: colors.greyLight }}
      bgcolor={colors.greyLight}
    >
      <Img.Logo src={images.logo} width="120" />
      <Img.Hero src={images.hero} width="600" />
      <Grid
        style={{ ...style.container, backgroundColor: colors.white }}
        bgcolor={colors.white}
        className="mobile-fix"
      >
        <Grid.Cell
          style={{ ...style.body }}
          className="mobile-fix mobile-padding-bottom-reset"
        >
          <div>
            <h1>This is a H1 element.</h1>
            <h2>This is a H2 element.</h2>
            <h3>This is a H3 element.</h3>
            <h4>This is a H4 element.</h4>
            <h5>This is a H5 element.</h5>
            <p>This is a paragraph element.</p>
            <p className="small">This is a small element.</p>

            <p>
              This is another paragraphe element. All paragraphs have 24px of
              margin on the bottom for consistent spacing.
            </p>
            <Button
              color={colors.black}
              buttonTextColor={colors.white}
              borderRadius="6px"
              buttonCopy="Button"
              url="https://github.com/iammatthias/crepe"
            />
          </div>
        </Grid.Cell>
      </Grid>
      <Grid.Spacer height="32" className="hide" />
      <Feature
        style={style}
        colors={colors}
        featureImg={images.feature}
        featureImgAlt="Lorem ipsum dolor sit amet"
        featureHeadline={["Lorem ipsum", <br key="1" />, "dolor sit amet"]}
        featureCopy={[
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ]}
        featureButton="Button"
        featureButtonURL={images.feature}
      />

      <Grid style={style.container} className="mobile-fix">
        <Grid.Row>
          <Grid.Cell style={style.body} className="footer mobile-fix">
            <div>
              <p className="footerCopy" style={style.footerCopy}>
                © Copyright 2019
              </p>
            </div>
          </Grid.Cell>
        </Grid.Row>
      </Grid>
    </center>
  );
}

export default Email;
