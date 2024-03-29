'use client'

import {
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemButton,
    AccordionItemHeading,
} from 'react-accessible-accordion'

import FaqIcon from '@/components/icons/faq-icon'
import ArrowUpIcon from '@/components/icons/arrow-up-icon'

export default function Faqs() {
    // TODO: Fetch faqs form the server
    const faqs = [
        [
            {
                title: 'Where i can i find you ...?',
                description: `
                  We are located in dheradun ,jogiwala near Oasis Mall

                  Haridwar Rd
                  
                  Dehradun
                  
                  Uttarakhand 248005.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: ' How many varaities do you have ...?',
                description: `
                  We have maximum varities of golguppas here you find every varities here ...!  .
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Golgappa?',
                description: `
                Golgappa, also known as Pani Puri, is a popular Indian street food. It consists of crispy hollow puris filled with a mixture of spicy, tangy water (pani) made of mint, tamarind, and other spices along with a stuffing of potatoes, chickpeas, or moong sprouts..
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'How is Golgappa served?',
                description: `
                  We have top notch employe here ...!.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
        ],
        [
            {
                title: 'Can I make Golgappa at home?',
                description: `
                Yes, Golgappa can be made at home. You'll need puris made from dough, a filling of your choice, and pani prepared with mint, coriander, spices, and tamarind. Various recipes are available online, offering step-by-step guidance 
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What are the key ingredients for making Golgappa?',
                description: `
                The main components for Golgappa include semolina or wheat flour for puris, boiled potatoes, chickpeas or sprouts for filling, and a blend of mint, coriander, tamarind, and spices for the pani..
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'How should I store Golgappa to maintain its freshness??',
                description: `
                Store the puris in an airtight container to retain crispness. Keep the filling separate from the puris. The pani should be prepared fresh, but you can store the ingredients separately and mix just before serving .
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What are some tips for making the perfect Golgappa?',
                description: `
                Tips for preparing Golgappa include making the puri dough slightly harder than chapati dough, using fresh ingredients for pani, and ensuring the puris are crispy .
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
        ],
    ]

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                {/* Title */}
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>

                {/* (Faqs) Frequently Asked Questions */}
                <Accordion
                    allowZeroExpanded="true"
                    allowMultipleExpanded="true"
                    className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
                >
                    {faqs.map((chunk, index) => {
                        return (
                            <div key={`FaqChunk-${index}`}>
                                {chunk.map((faq, id) => {
                                    return (
                                        <AccordionItem
                                            uuid={`FaqChunk-${index}:${id}`}
                                        >
                                            <AccordionItemHeading>
                                                <AccordionItemButton className="flex items-center justify-between w-full py-5 text-lg font-medium text-left text-gray-900 dark:text-white transition-all ease-in cursor-pointer">
                                                    <div className="flex flex-row">
                                                        {/* Icon */}
                                                        {faq?.icon}

                                                        {/* Title */}
                                                        <span>
                                                            {faq?.title}
                                                        </span>
                                                    </div>

                                                    {/* Arrow Up Icon */}
                                                    <ArrowUpIcon filled />
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className="py-5 transition-all duration-300 ease-in-out">
                                                {/* Description */}
                                                <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">
                                                    {faq?.description}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Accordion>
            </div>
        </section>
    )
}
