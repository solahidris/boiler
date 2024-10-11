import PageContainer from "@/components/PageContainer";
import WhileInViewAnimation from "@/components/animationFadeIn/WhileInViewAnimation";
import MainBanner from "@/components/MainBanner";
import GoogleReviews from "@/components/GoogleReviews";
// import './styles/globals.css';

const OtherPages = () => {
  
  const content = {
    title: "Page Title",
    description: "Page Description",
    imagePath: "/banners/banner_placeholder.png",
  };

  // Example review objects
  const reviews: any[] = [  
    { author_name: "John Doe", rating: 5, text: "Great service!" },
  ];

  const components = [
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

  return (
    <PageContainer>
      <MainBanner
        title={content.title}
        tagline={content.description}
        imagePath={content.imagePath}
      />
      {components.map(({ Component, props }, index) => (
        <WhileInViewAnimation key={index}>
          <Component {...props} />
        </WhileInViewAnimation>
      ))}
    </PageContainer>
  );
};

export default OtherPages;
