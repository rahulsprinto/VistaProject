import React from 'react';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';

const Footer = () => {
  const FooterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    padding: '8px', // Reduce padding to decrease height
  }));

  const Column = styled(Stack)(({ theme }) => ({
    flex: 1,
    gap: 1,
    textAlign: 'center',
  }));

  const handleRedirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/rahul-choudhary-57629916b/', '_blank');
  };

  const handleRedirectToPortfolio = () => {
    window.open('https://bold.pro/my/rahulkumar-choudhary', '_blank');
  };

  return (
    <FooterContainer component="footer">
      <Column>
        <FooterTitle text={'address'} />
        <FooterLink text={'406, Miracle Residence, Arjan, Dubai'} />
        <FooterLink text={'+971555852843'} />
        <FooterLink text={'rahulkr.choudhary9@gmail.com'} />
      </Column>

      <Column>
        <FooterTitle text={'Social Media'} />
        <Button onClick={handleRedirectToLinkedIn}>LinkedIn</Button>
      </Column>

      <Column>
        <FooterTitle text={'Portfolio'} />
        <Button onClick={handleRedirectToPortfolio}>Portfolio</Button>
      </Column>

      <Column>
        <FooterTitle text={'Rahul Kumar Choudhary'} />
        <Typography variant="caption" component="p">
          &copy; 2023 Rahul Kumar Choudhary.
        </Typography>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
