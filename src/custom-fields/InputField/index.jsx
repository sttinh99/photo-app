import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

export default function InputField(props) {
    const {
        field, form, //props của fastfield của formik
        type, label, placeholder, disabled //props tự định nghĩa
    } = props; //by đống này vào trong formgroup
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field} //muốn sài kiểu này cho gọn phải biết trong này có bao nhiêu props tránh dư props
                // name={name}
                // value={value}
                // onChange={onChange}
                // onBlur={onBlur}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
            />
            {/* {showError && <p>{errors[name]}</p>} */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

InputField.defaultProps = {
    type: "text",
    label: '',
    placeholder: '',
    disabled: false
}