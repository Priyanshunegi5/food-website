import Link from 'next/link'
import { Button, ButtonGroup } from '@nextui-org/react'

export default function () {
    return (
        <>
            <h1>Home Page</h1>
            <br />
            <Link href="/contact">
                <Button color="primary">Contact Us</Button>
            </Link>
        </>
    )
}
