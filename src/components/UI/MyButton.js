import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';
import classes from './UI.module.css';

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant='contained'
      size='small'
      style={{ ...props.style, background: props.bck, color: props.color }}
    >
      <img src={TicketIcon} className={classes.iconImage} alt='icon_button' />
      {props.text}
    </Button>
  );
};

export default MyButton;
