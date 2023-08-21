import HomePageLayout from '@/layout/HomePageLayout';
import React from 'react'

const about = () => {
    return (
        <div>About us page</div>

    )
}

export default about;

about.getLayout = function getLayout(page) {
    return (
        <HomePageLayout>
            {page}
        </HomePageLayout>
    )
}