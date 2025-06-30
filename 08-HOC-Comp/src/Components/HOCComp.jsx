
const HOCCOMP = (WrappedComponent) => {
  return ({ isLoading, setIsLoading}) => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    else{
        return <WrappedComponent setIsLoading={setIsLoading}/>;
    }
  };
};

export default HOCCOMP;