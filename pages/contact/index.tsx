import GoogleReviewsSimple from "@/components/GoogleReviewsSimple";
import PageContainer from "@/components/PageContainer";
import UserPageContent from "@/components/UserPageContent";

const UserPage = () => {

    return (
        <PageContainer>
            <GoogleReviewsSimple />
            <UserPageContent />
        </PageContainer>
    )
};

export default UserPage;