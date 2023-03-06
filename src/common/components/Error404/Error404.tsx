import React from 'react';
import BackLink from "common/components/BackLink/BackLink";
import {ErrorContainer, Error} from 'common/components/Error404/error404Styles';

export const Error404 = () => {

  return (
    <ErrorContainer>
      <BackLink/>
      <Error>404 Not Found</Error>
    </ErrorContainer>
  );

};