import Map from '@/app/(pages)/contact/_components/google/map'
import FormLayout from '@/app/(pages)/contact/_components/forms/form-layout'
import SimpleForm from '@/app/(pages)/contact/_components/forms/simple-form'

export default function Hero() {
    return (
        <section className="mb-32">
            <Map />

            {/* Contact Details And Form */}
            <div className="container px-6 md:px-12">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    {/* Title */}
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>

                    {/* Description */}
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                    </p>

                    <FormLayout>
                        <SimpleForm />
                    </FormLayout>
                </div>
            </div>
        </section>
    )
}
