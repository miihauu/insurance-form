import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  button: {
    margin: '20px 0',
    backgroundColor: '#ffcc00',
    width: '100%',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    '&:hover': {
      backgroundColor: '#f9a825',
      borderColor: '#f9a825'
    }
  }
}));
const ConfirmButton = ({ isOpen, carBrand, carModel, buttonText, URL }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        disabled={!isOpen}
        href={`${URL}?make_name=${carBrand}&model_name=${carModel}`}
      >
        {buttonText}
        <ArrowForwardOutlinedIcon />
      </Button>
    </>
  );
};

export default ConfirmButton;
