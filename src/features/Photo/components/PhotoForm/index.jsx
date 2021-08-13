import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Spinner } from 'reactstrap';
// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global'
// import Images from '../../../../constants/images'
import { Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup'

export default function PhotoForm(props) {
    console.log(props);
    const { initialValues, isAddMode } = props
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('this is field required.'),

        categoryId: Yup.number().required('this is field required.').nullable(),

        photo: Yup.string().when("categoryId", {
            is: 1,
            then: Yup.string().required('this is field required.'),
            otherwise: Yup.string().notRequired('this is field required.')
        })
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                //do something here...
                const { values, errors, touched, isSubmitting } = formikProps //một trong số những thứ của formikProps
                console.log(({ values, errors, touched }));
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            // những props của fastfield

                            label="Title"
                            placeholder="Eg: Wow nature ... "
                        //những props mình tự định nghĩa để truyền vào component InputField
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}
                            // những props của fastfield

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        //những props mình tự định nghĩa để truyền vào component InputField
                        />
                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            lable="Photo"
                        />
                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"} >
                                {isSubmitting && <Spinner />}
                                {isAddMode ? 'Add to Album' : 'Edit Photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

PhotoForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func
}
PhotoForm.defaultProps = {
    onSubmit: null,
    initialValues: {}
}
