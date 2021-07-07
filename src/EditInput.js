import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { EditInputStyles } from './styles';

const useStyles = makeStyles(EditInputStyles);

export default function EditInput(props) {
  const classes = useStyles();

  const [text, setText] = useState(props.text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    props.onChange(props.id, text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, props.text]);

  return <input className={classes.input} type="text" value={text} onChange={handleChange}></input>;
}
