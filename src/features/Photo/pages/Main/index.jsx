import React from 'react'
// import Banner from '../../../../components/Banner'
// import Images from '../../../../constants/images'
import Banner from 'components/Banner';
import Images from 'constants/images';

import { Container } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

export default function MainPage(props) {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const history = useHistory();

    console.log('List of photo', photos);
    const handlePhotoEditClick = (photo) => {
        history.push(`/photos/${photo.id}`)
    }
    const handlePhotoRemoveClick = (photo) => {
        const removePhotoId = photo.id
        const action = removePhoto(removePhotoId)
        dispatch(action)
    }
    return (
        <div className="photo-main">
            <Banner title="Your anwsome photo 🎉" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="/photos/add">Add new Photo</Link>
                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

