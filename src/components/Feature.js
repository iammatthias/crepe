import React from 'react';
import Grid from './Grid';
import Button from './Button';
import Img from './Img';

function Feature({
  style,
  colors,
  featureImg,
  featureImgAlt,
  featureHeadline,
  featureCopy,
  featureButton,
  featureButtonURL
}) {
  return (
    <Grid
      style={{ ...style.container, backgroundColor: colors.white }}
      bgcolor={colors.white}
      className="mobile-fix"
    >
      <Grid.Row>
        <Grid.Header className="mobile-stack mobile-fix" width="45%">
          <Img
            className="img-fix"
            src={featureImg}
            width="275"
            alt={featureImgAlt}
          ></Img>
        </Grid.Header>
        <Grid.Header className="mobile-stack mobile-fix" width="55%">
          <Grid>
            <Grid.Cell style={{ ...style.body }}>
              <div>
                <p
                  style={{
                    marginBottom: '8px',
                    fontSize: '24px',
                    color: '#2E3545',
                    letterSpacing: '0',
                    lineHeight: '32px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  {featureHeadline}
                </p>
                <p style={{ textAlign: 'center' }}>{featureCopy}</p>
                <Button
                  margin="0 auto"
                  color={colors.black}
                  buttonTextColor={colors.white}
                  borderRadius="6px"
                  buttonCopy={featureButton}
                  link={featureButtonURL}
                />
              </div>
            </Grid.Cell>
          </Grid>
        </Grid.Header>
      </Grid.Row>
    </Grid>
  );
}

export default Feature;
