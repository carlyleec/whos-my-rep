import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

import CardList from './CardList';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Table from './Table';
import Showable from './Showable';

const RepName = styled.h2`
  flex: 1 1;
  padding: 0;
  margin: 0;
  font-size: 1em;
  @media (min-width: 480px) {
    font-size: 1.2em;
  }
`;

const PartyCircle = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${props => (props.party === 'Democrat' ? '#1976D2' : '#D32F2F')};
  color: white;
  font-weight: 700;
  @media (min-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;

const RepList = ({ reps, showDetails, onClick }) => (
  <Showable show={reps.length > 0}>
    <CardList >
      {
        reps.map((rep, index) => (
          <Card party={rep.party} key={rep.name}>
            <CardSection>
              <RepName>{rep.name}</RepName>
              <PartyCircle party={rep.party}>{rep.party.charAt(0)}</PartyCircle>
            </CardSection>
            <CardSection>
              <Showable show={showDetails.indexOf(index) !== -1}>
                <Table>
                  <tbody>
                    <tr>
                      <td>District:</td>
                      <td>{rep.district}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{rep.office}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>{rep.phone}</td>
                    </tr>
                    <tr>
                      <td>Website:</td>
                      <td><a href={rep.link} target="_blank">{rep.link}</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Showable>
            </CardSection>
            <CardSection>
              <Button valid size="sm" onClick={() => onClick(index)}>{showDetails.indexOf(index) !== -1 ? 'Hide Details' : 'Show Details'}</Button>
            </CardSection>
          </Card>
        ))
      }
    </CardList>
  </Showable>
);

export default RepList;
