import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Select from '../../components/Select';
import Button from '../../components/Button';
import RepList from '../../components/RepList';
import Showable from '../../components/Showable';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

import { REP_TYPE_OPTIONS, STATE_OPTIONS } from './constants';
import {
  selectedRepType,
  selectedRepState,
  repsFetchRequested,
  toggleShowDetailClicked,
  dismissErrorClicked,
} from './actions';

const AppWrapper = styled.div`
  flex: 0 0 90%;
  @media (min-width: 480px) {
    flex: 0 0 50%;
  }
`;

const App = ({ repType, repState, onChangeRepType, onChangeRepState, fetchReps, reps, showDetails, toggleRepDetails, errorMessage, dismissError, loading}) => {
  const valid = repType !== 'default' && repState !== 'default';
  return (
    <Container>
      <AppWrapper>
        <Title>Who&apos;s my representative?</Title>
        <Text>Find your representatives (and senators) of your state by following the easy steps below.</Text>
        <Select label="1. Choose a representative type" options={REP_TYPE_OPTIONS} onChange={onChangeRepType}></Select>
        <Select label="2. Choose a your state" options={STATE_OPTIONS} onChange={onChangeRepState}></Select>
        <Showable show={errorMessage !== ''}>
          <ErrorMessage onClick={dismissError}>{errorMessage}</ErrorMessage>
        </Showable>
        <Button type="button" size="large" onClick={() => fetchReps(repType, repState)} valid={valid}>FIND MY REPS</Button>
        <Loading show={loading}>Loading ...</Loading>
        <RepList reps={reps} onClick={toggleRepDetails} showDetails={showDetails} />
      </AppWrapper>
    </Container>
  );
};

const mapStateToProps = state => (
  {
    repType: state.appReducer.repType,
    repState: state.appReducer.repState,
    reps: state.appReducer.reps,
    showDetails: state.appReducer.showDetails,
    errorMessage: state.appReducer.errorMessage,
    loading: state.appReducer.loading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onChangeRepType: (e) => {
      dispatch(selectedRepType(e.target.value));
    },
    onChangeRepState: (e) => {
      dispatch(selectedRepState(e.target.value));
    },
    fetchReps: (repType, repState) => {
      dispatch(repsFetchRequested(repType, repState));
    },
    toggleRepDetails: (detailIndex) => {
      dispatch(toggleShowDetailClicked(detailIndex));
    },
    dismissError: () => {
      dispatch(dismissErrorClicked());
    },
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(App);
