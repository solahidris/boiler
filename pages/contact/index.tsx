import GoogleReviews from "@/components/GoogleReviews";
import PageContainer from "@/components/PageContainer";
import UserPageContent from "@/components/UserPageContent";

const UserPage = () => {

    return (
        <PageContainer>
            <GoogleReviews />
            <UserPageContent />
        </PageContainer>
    )
};

export default UserPage;