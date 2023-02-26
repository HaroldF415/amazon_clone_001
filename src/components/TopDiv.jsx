function TopDiv ({mock, generateUniqueID}) {
    return(
        <div className="grid grid-cols-4 gap-4">
            {mock.map((item) => {return (
                <div className="bg-white " key={generateUniqueID()}>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <img className="max-h-40 max-w-xs m-auto p-auto cursor-pointer" key={generateUniqueID()} src={item.images[0]} alt={item.title}/>
                    <h5 className="text-blue-600">{item.brand}</h5>
                </div>
            )})}
        </div>
    )
}
export default TopDiv;