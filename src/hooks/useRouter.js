import { get, map, filter } from 'lodash'

export default function useRouter({ pathname, version, web }) {
    /**
     * Check if given path is of active route
     *
     * @param {string} path
     * @returns boolean
     */
    const isActiveRoutePath = path => {
        return path === pathname
    }

    /**
     * Get all routes registered in web.
     *
     * @returns object|null
     */
    const getRoutes = () => {
        return map(get(web, version, null), value => value)
    }

    /**
     * Get any route by its name from the web.
     *
     * @param {string} name
     * @returns object|null
     */
    const getRouteByName = name => {
        return get(
            filter(get(web, version, null), value => name === value.name),
            '0',
            null,
        )
    }

    /**
     * Get any route by its path from the web.
     *
     * @param {string} path
     * @returns object|null
     */
    const getRouteByPath = path => {
        return get(
            filter(get(web, version, null), value => path === value.path),
            '0',
            null,
        )
    }

    return { getRoutes, isActiveRoutePath, getRouteByPath, getRouteByName }
}
