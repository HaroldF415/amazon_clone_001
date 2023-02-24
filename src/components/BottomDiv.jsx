function BottomDiv ({mock}) {
    const bottomData = mock.slice(mock.length/2)
    return(
        <div>
        {bottomData.map((item) => {return (
            <div>
                <h4>{item.title}</h4>
                <img src={item.images[0]} alt={item.title}/>
                <h5>{item.brand}</h5>
            </div>
        )})}
    </div>
    )
}
export default BottomDiv;