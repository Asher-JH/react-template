import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

import TextField from "@components/TextField";
import PrimaryButton from "@components/PrimaryButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 4),
    background: "none",
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  return (
    <form>
      <Paper elevation={0} className={classes.root}>
        <TextField label="Email" placeholder="johndoe@gmail.com" />
        <TextField
          label="Message"
          placeholder="What do you want to let me know....."
          multiline
          rows={10}
        />
        <PrimaryButton label="Send" icon={<SendIcon />} />
      </Paper>
    </form>
  );
};

export default ContactForm;
