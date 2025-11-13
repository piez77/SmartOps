import { motion, useInView } from "motion/react";
import { type RefObject, type ReactNode } from "react";

interface TimelineContentProps {
  children: ReactNode;
  animationNum: number;
  timelineRef: RefObject<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  customVariants?: {
    visible: (i: number) => {
      y: number;
      opacity: number;
      filter: string;
      transition: {
        delay: number;
        duration: number;
      };
    };
    hidden: {
      filter: string;
      y: number;
      opacity: number;
    };
  };
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  as: Component = "div",
  className,
  customVariants,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });

  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      className={className}
    >
      {Component === "div" ? children : <Component className={className}>{children}</Component>}
    </motion.div>
  );
}
