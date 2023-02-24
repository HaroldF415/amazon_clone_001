function TopDiv ({mock}) {
    const topData = mock.slice(0, mock.length/2)
    return(
        <div>
            {topData.map((item) => {return (
                <div>
                    <h4>{item.title}</h4>
                    <img src={item.images[0]} alt={item.title}/>
                    <h5>{item.brand}</h5>
                </div>
            )})}
        </div>
    )
}
export default TopDiv;