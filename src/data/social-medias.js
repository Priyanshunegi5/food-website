'use client'

import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'

/**
 * All app social medias will be defined here.
 *
 * Things that are not completly
 * dynamic but still need changes later on
 *
 * @var const SocialMedias
 */
export const SocialMedias = {
    youtube: {
        name: 'Youtube',
        icon: <FaYoutube />,
        link: 'https://youtube.com',
    },
    facebook: {
        name: 'Facebook',
        icon: <FaFacebook />,
        link: 'https://facebook.com',
    },
    instagram: {
        name: 'Instagram',
        icon: <FaInstagram />,
        link: 'https://instagram.com',
    },
}
