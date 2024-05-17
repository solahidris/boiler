import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
// import "./styles.css";

interface WhileInViewAnimationProps {
  children: ReactNode;
}

const WhileInViewAnimation = ({ children }: WhileInViewAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default WhileInViewAnimation;