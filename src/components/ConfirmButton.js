import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { makeStyles } from '@material-ui/styles';
import { button } from '../data/styles';

const useStyles = makeStyles(() => button);

const ConfirmButton = ({ isOpen, text, cta }) => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button} disabled={!isOpen} href={cta}>
      {text}
      <ArrowForwardOutlinedIcon />
    </Button>
  );
};

export default ConfirmButton;
