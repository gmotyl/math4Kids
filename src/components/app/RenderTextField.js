import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';

const RenderTextField = ({ input, label, type, meta: { touched, error }, errorText, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               type={type}
               errorText={touched && errorText}
               autoFocus
               style={{width: "80px", fontSize: "40px"}}
        {...input}
        {...custom}
        />
)

export default RenderTextField
