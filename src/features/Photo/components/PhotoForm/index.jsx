import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global'
import Images from '../../../../constants/images'
import { Button } from 'reactstrap';

export default function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: Wow nature ... "></Input>
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS} >
                </Select>
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Photo</Label>
                <div><Button type="button" outline color="primary">Random a Photo</Button></div>
                <div>
                    <img width="200" height="200" src={Images.COLORFUL_BG} alt="images" />
                </div>
            </FormGroup>
            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}
PhotoForm.defaultProps = {
    onSubmit: null
}
