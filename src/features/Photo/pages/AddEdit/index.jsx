import React from 'react'
import PropTypes from 'prop-types'
// import Banner from '../../../../components/Banner';
// import PhotoForm from '../../components/PhotoForm';
import './AddEdit.scss'
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';
// import PhotoForm from 'features/Photo/components/PhotoForm';

export default function AddEditPage() {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const history = useHistory()
    const { photoId } = useParams()
    const isAddMode = !photoId

    const editPhoto = photos.find(photo => photo.id === parseInt(photoId))
    // console.log(editPhoto, photoId);
    const initialValues = isAddMode ? {
        title: '',
        categoryId: null,
        photo: '',
    } : editPhoto

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(newPhoto)
                    dispatch(action)
                }
                else {
                    const action = updatePhoto(values)
                    dispatch(action)
                }
                history.push('/photos')
                resolve(true)
            })
        }, 2000)
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photos 🤣" />
            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
AddEditPage.propTypes = {

}

const randomNumber = () => {
    console.log((Math.trunc(Math.random() * 99999)));
}
