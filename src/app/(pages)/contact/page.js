import Link from 'next/link'
import { Button, ButtonGroup } from '@nextui-org/react'

export default function () {
    return (
        <>
            <h1>Contact Page</h1>
            <br />
            <Link href="/">
                <Button color="primary">Home Page</Button>
            </Link>
        </>
    )
}
