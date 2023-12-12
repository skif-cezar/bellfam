export const animationX = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: any) => {
    return {
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    };
  },
};

export const animationY = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: any) => {
    return {
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    };
  },
};