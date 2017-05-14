import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

import CardList from './CardList';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Table from './Table';
import Showable from './Showable';

const getPartyColor = (party) => {
  switch (party) {
    case 'Democrat':
      return '#1976D2';
    case 'Republican':
      return '#D32F2F';
    case 'Independent':
      return '#7B1FA2';
    default:
      return '#616161';
  }
};

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
  background: ${props => (getPartyColor(props.party))};
  color: white;
  font-weight: 700;
  @media (min-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;

const renderDistricts = (district) => {
  if (district.length > 0) {
    return (
      <tr>
        <td>District: </td>
        <td>{district}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td></td>
      <td></td>
    </tr>
  );
};

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
                    { renderDistricts(rep.district) }
                    <tr>
                      <td>Address: </td>
                      <td>{rep.office}</td>
                    </tr>
                    <tr>
                      <td>Phone: </td>
                      <td>{rep.phone}</td>
                    </tr>
                    <tr>
                      <td>Website: </td>
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
