export const useDelay = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
