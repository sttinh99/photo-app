import React from 'react'
import PropTypes from 'prop-types'
// import Banner from '../../../../components/Banner';
// import PhotoForm from '../../components/PhotoForm';
import './AddEdit.scss'
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
// import PhotoForm from 'features/Photo/components/PhotoForm';

export default function AddEditPage() {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photos 🤣" />
            <div className="photo-edit__form">
                <PhotoForm onSubmit={value => console.log('Form submit: ', value)} />
            </div>
        </div>
    );
}

AddEditPage.propTypes = {

}
