import { useEffect, useState } from 'react'

export default function Category({ categories, onUpdate }) {
    const [currCategory, setCurrCategory] = useState(categories[0]?.id)

    useEffect(() => {
        onUpdate(currCategory)
    }, [currCategory])

    return (
        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        onClick={() => setCurrCategory(category?.id)}
                        key={`GalleryCategory-${index}:${category?.id}`}
                        class={
                            currCategory !== category?.id
                                ? 'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                                : 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                        }
                    >
                        {category?.title}
                    </button>
                )
            })}
        </div>
    )
}
