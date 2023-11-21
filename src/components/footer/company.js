import { setting } from '@/data/setting'
import Logo from '@/components/images/logo'

export default function Company() {
    return (
        <div className="text-justify sm:text-center">
            {/* Company Section */}
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                {/* Company Logo */}
                <Logo className="mr-3 w-10 h-10 hover:scale-110" />

                {/* Company Short Name */}
                <p className="font-bold text-2xl">{setting?.shortName}</p>
            </h6>

            {/* Company Description */}
            <p>{setting?.description}</p>
        </div>
    )
}
