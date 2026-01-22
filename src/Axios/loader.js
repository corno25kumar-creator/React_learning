let setLoadingFn;

export const setLoader = (setLoading) => {
  setLoadingFn = setLoading;
};

export const showLoader = () => {
  if (setLoadingFn) setLoadingFn(true);
};

export const hideLoader = () => {
  if (setLoadingFn) setLoadingFn(false);
};
