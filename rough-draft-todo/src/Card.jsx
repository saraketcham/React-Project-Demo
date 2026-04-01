function Card(){

    const cardEmoji = "🥰🥰"
    const cardHeader = "new header"
    const cardBlurb = "this is the blurb!!!"


    return (
        <div className="m-6 border p-3 hover:shadow-xl hover:translate-y-2 hover:bg-pink-200">
            <span className="text-5xl"> {cardEmoji} </span>
            <div>
            <h1 className="inline-block px-3 my-3 text-xl font-bold border rounded-3xl shadow-md bg-pink-400 " > {cardHeader}</h1>
            </div>            
            <p className="border border-pink-200 rounded-3xl p-5
        ">  {cardBlurb}</p>
        </div>
    )
}

export default Card;