import { layouts } from '@/data/layouts/layout'
import { effect } from '@/data/transitions/effect'

/**
 * All app routes will be defined here.
 * For easy access of and later manipulation in single place
 *
 * @var const web
 */
export const web = {
    version: 'v1',
    root: '/',
    web: {
        v1: {
            Home: {
                name: 'Home',
                path: '/',
                dynamic: false,
                transition: effect.fade,
                layout: layouts.maximmal,
            },
            Blog: {
                name: 'Blog',
                path: '/blog/[slug]',
                dynamic: true,
                transition: effect.fade,
                layout: layouts.maximmal,
            },
            Gallery: {
                name: 'Gallery',
                path: '/gallery',
                dynamic: false,
                transition: effect.fade,
                layout: layouts.maximmal,
            },
            About: {
                name: 'About',
                path: '/about',
                dynamic: false,
                transition: effect.fade,
                layout: layouts.maximmal,
            },
            Contact: {
                name: 'Contact',
                path: '/contact',
                dynamic: false,
                transition: effect.fade,
                layout: layouts.maximmal,
            },
        },
    },
}
