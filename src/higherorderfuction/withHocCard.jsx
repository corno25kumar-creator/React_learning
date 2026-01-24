const withHocCard = (Component) => {
  return (props) => {
    return (
      <div className="w-72 h-44 flex items-center justify-center bg-gray-100">
        <div className="w-72 h-44 bg-linear-to-br from-indigo-500 to-purple-600 
                        rounded-2xl shadow-xl flex flex-col items-center justify-center
                        gap-3 text-white transition-all duration-300 
                        hover:scale-105 hover:shadow-2xl">

          <h1 className="text-2xl font-bold tracking-wide text-center">
            This is a nested component
          </h1>

          <Component {...props} /> 
          
        </div>
      </div>
    );
  };
};

export default withHocCard;
