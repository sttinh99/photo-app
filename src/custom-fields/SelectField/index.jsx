import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

export default function SelectField(props) {
    const {
        field, form, //props của fastfield của formik
        options, label, placeholder, disabled //props tự định nghĩa
    } = props //by đống này vào trong formgroup
    const { name, value } = field

    const { errors, touched } = form
    const showError = errors[name] && touched[name]

    const selectedOption = options.find(option => option.value === value)

    const handleSelectOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption
        const changeEvent = {
            target: {
                name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field} //muốn sài kiểu này cho gọn phải biết trong này có bao nhiêu props tránh dư props
                onChange={handleSelectOptionChange} //override lại cái onchange default ... phải đặt dưới onChange của formik
                value={selectedOption}
                // name={name}
                // value={value}
                // onChange={onChange}
                // onBlur={onBlur}
                disabled={disabled}
                placeholder={placeholder}
                options={options}
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
}

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}