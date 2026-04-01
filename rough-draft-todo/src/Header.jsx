function colorSelector (variant){
    if (variant == "blue") return "bg-blue-500"
    if (variant == "red") return "bg-red-500"
    return "bg-gray-300"
}


function Header({variant,title,subtitle}){
    const bgColor = colorSelector(variant)

    const allBooks = {

        "abc": "title","gene yang":"author","graphic novel":"genre"
    }


    return (
        <div >
   
            <div className={bgColor}>
            <div className="m-6 p-3 rounded-xl ">   


            <h1 className=" text-4xl font-bold font-serif border shadow-xl mb-2 rounded-xl" > {title}</h1>
            <h3 className=" text-xl font-semibold font-serif " > {subtitle}</h3>
            </div>
            </div>
      </div>
     
    )
};

export default Header;


//  <div className={`m-6 p-3 rounded-xl ${bgColor}`}></div>