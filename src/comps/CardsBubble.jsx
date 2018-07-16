import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Chatbox.css';
import { Image, Grid, Card } from 'semantic-ui-react';
import { proj1, proj2, proj3 } from '../res/imgBundle';

const Cardsoptionble = (props) => {
  const { bubInfo } = props;
  const imgSrc = [proj1, proj2, proj3];
  return (
    <Grid columns={3} centered className="cards-container">
      <Grid.Row>
        {bubInfo.map(option => {
          return (
            <Grid.Column key={option.opId} textAlign="center">
              <Card>
                <Image src={imgSrc[option.opId || 0]} />
                <Card.Content>
                  <Card.Header>{option.opTitle}</Card.Header>
                  <Card.Meta>
                    <span className="card-label">#B2B</span>
                    <span className="card-label">#Marketing</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville. Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat. Matthew is a musician living in Nashville. Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>);
        })
      }
      </Grid.Row>
    </Grid>
  );
};

Cardsoptionble.propTypes = {
  bubInfo: PropTypes.array.isRequired
  // imgName: PropTypes.string
};

export default Cardsoptionble;
