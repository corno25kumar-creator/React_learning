import myStore from "../store";

const Card = () => {

 const { data, changeName ,getCurrentName} = myStore();

  return (
    <div className="w-72 h-44 bg-linear-to-br from-indigo-500 to-purple-600 
                    rounded-2xl shadow-xl flex flex-col justify-center items-center 
                    gap-5 text-white transform transition-all duration-300 
                    hover:scale-105 hover:shadow-2xl">

      <h1 className="text-3xl font-bold tracking-wide">
        {data}
      </h1>

      <button 
        onClick={changeName}
        className="px-5 py-2 bg-white text-indigo-600 font-semibold 
                   rounded-full shadow-md transition-all duration-300
                   hover:bg-indigo-100 hover:scale-105 active:scale-95"
      >
        Change Text
      </button>
        <button 
        onClick={getCurrentName}
        className="px-5 py-2 bg-white text-indigo-600 font-semibold 
                   rounded-full shadow-md transition-all duration-300
                   hover:bg-indigo-100 hover:scale-105 active:scale-95"
      >
       get new text
      </button>
    </div>
  );
};

export default Card;
