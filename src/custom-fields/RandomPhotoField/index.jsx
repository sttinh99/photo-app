import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

export default function RandomPhotoField(props) {
    const { field, form, label } = props
    const { name, value, onBlur } = field
    const { errors, touched } = form
    const showError = errors[name] && touched[name]
    const handleImageUrlChange = (newImageUrl) => {
        console.log('2');
        console.log(name, newImageUrl);
        form.setFieldValue(name, newImageUrl)
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            {/* nay la components minh viet nen minh chua ho tro classname 
            resolve them thuoc tinh classname hoac dung trict nhu o duoi :)))*/}
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string
}

RandomPhotoField.defaultProps = {
    label: ''
}
