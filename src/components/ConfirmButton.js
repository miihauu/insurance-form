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
      borderColor: '#f9a825',
    },
  },
}));
const ConfirmButton = ({
  isOpen,
  carBrand,
  carModel,
  buttonText,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        variant="contained"
        className={classes.button}
        disabled={isOpen ? false : true}
        href={`https://www.mfind.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac?make_name=${carBrand}&model_name=${carModel}`}
      >
        {buttonText}
        <ArrowForwardOutlinedIcon />
      </Button>
    </React.Fragment>
  );
};

export default ConfirmButton;
