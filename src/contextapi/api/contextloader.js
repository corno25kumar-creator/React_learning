let setContextLoaderFn;

export const setLoader = (setLoading) => {
  setContextLoaderFn = setLoading;
};

export const showLoader = () => {
  if (setContextLoaderFn) setContextLoaderFn(true);
};

export const hideLoader = () => {
  if (setContextLoaderFn) setContextLoaderFn(false);
};
