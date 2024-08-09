import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
// import "./styles.css";

interface WhileInViewAnimationProps {
  children: ReactNode;
  classNameProp?: string;
  delay?: string;
}

const WhileInViewAnimationFromRight = ({ children, classNameProp, delay = "0.2s" }: WhileInViewAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={`${classNameProp}`}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(30px)",
          opacity: isInView ? 1 : 0,
          transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default WhileInViewAnimationFromRight;