import React from 'react';
import backArrow from 'assets/icons/backArrow.svg'
import { BackLinkContainer } from 'common/components/BackLink/backLinkStyles';

const BackLink = () => {

  return (
      <BackLinkContainer to={'/adsList'}>
        <img src={backArrow} alt={'arrow'}/>
        <span>Back to main page</span>
      </BackLinkContainer>
  );

};

export default BackLink;