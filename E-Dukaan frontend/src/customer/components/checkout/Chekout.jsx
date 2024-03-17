/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
const steps = ['Login', 'Delivey Address', 'Order Summary' , 'Payment'];

export default function Checkout() {

  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
//   console.log(querySearch);
  const step = querySearch.get('step');

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  

  return (
    <div className='px-10 lg:px-20'>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1}}>
                    Back
                </Button>
          </Box>
        <div className='mt-10'>
            {step==2?<DeliveryAddressForm/>:<OrderSummary/>}
        </div>
        </React.Fragment>
      )}
    </Box>
    </div>
  );
}
