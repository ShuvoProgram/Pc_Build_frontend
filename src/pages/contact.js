import HomePageLayout from "@/layout/HomePageLayout";

const contact = () => {
    return (
        <div>contact</div>
    )
}

export default contact;

contact.getLayout = function getLayout(page) {
    return (
        <HomePageLayout>
            {page}
        </HomePageLayout>
    )
}