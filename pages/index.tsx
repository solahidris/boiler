import PageContainer from "@/components/PageContainer";
import WhileInViewAnimation from "@/components/animationFadeIn/WhileInViewAnimation";
import HompageBanner from "@/components/HompageBanner";
import GoogleReviews from "@/components/GoogleReviews";
import GoogleReviewsSimple from "@/components/GoogleReviewsSimple";
// import HeroContent from "@/components/HeroContent";
// import Benefits from "@/components/Benefits";
// import Testimonials from "@/components/Testimonials";
// import FAQs from "@/components/FAQs";
// import Blogs from "@/components/Blogs";

// Example review objects
const reviews: any[] = [  
  { author_name: "John Doe", rating: 5, text: "Great service!" },
];

const components = [
  // { Component: GoogleReviewsSimple, props: {} },
  { Component: GoogleReviews, props: { reviews } }, // Pass reviews here
  // { Component: HeroContent, props: {} },
  // { Component: Benefits, props: {} },
  // { Component: Testimonials, props: {} },
  // { Component: FAQs, props: {} },
  // { Component: Blogs, props: {} },
  // {
  //   Component: SAMPLE_COMPONENT,
  //   props: {
  //     title: content.title,
  //     tagline: content.description,
  //     imagePath: content.imagePath,
  //   },
  // },
];

const Home = () => {
  return (
    <PageContainer>
      <HompageBanner />
      {components.map(({ Component, props }, index) => (
        <WhileInViewAnimation key={index}>
          <Component {...props} />
        </WhileInViewAnimation>
      ))}
    </PageContainer>
  );
}

export default Home;