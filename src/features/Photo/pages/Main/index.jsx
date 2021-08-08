import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <div className="photo-main">
            <Banner title="Your anwsome photo 🎉" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="/photos/add">Add new Photo</Link>
            </Container>
        </div>
    );
}

MainPage.propTypes = {

}
