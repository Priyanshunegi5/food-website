'use client'

import { FaLinkedin, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

/**
 * All app social medias will be defined here.
 *
 * Things that are not completly
 * dynamic but still need changes later on
 *
 * @var const socialMedias
 */
export const socialMedias = {
    facebook: {
        name: 'Facebook',
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/ausgolguppaywala/',
    },
    instagram: {
        name: 'Instagram',
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/ausgolguppaywala/',
    },
    linkedin: {
        name: 'Linkedin',
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/nishant-tomar-3a36534b/',
    },
    google: {
        name: 'Google',
        icon: <FaGoogle />,
        link: 'https://www.google.co.in/search?q=australian+golgappe+wala',
    },
}
