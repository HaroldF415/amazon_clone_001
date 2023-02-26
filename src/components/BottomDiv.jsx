import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function BottomDiv ({mock, generateUniqueID}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const filterByCat = mock.filter((item) => item.category === "smartphones").flatMap((item) => {return (
        item.images.map((img) => {return img})
    )})

    function preSlide () {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? filterByCat.length - 1 : currentIndex - 1; 
        setCurrentIndex(newIndex);
    }

    function nextSlide () {
        const isLastSlide = currentIndex === filterByCat.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1; 
        setCurrentIndex(newIndex);
    }

    return (
        <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group">
            <h4>Smartphones</h4>
            <div style={{backgroundImage: `url(${filterByCat[currentIndex]})`}}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            key={generateUniqueID()
            }>
        </div> 
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] letf-5 text-3xl rounded-full p-2 bg-black/20 text-white curosr-pointer">
            <FontAwesomeIcon onClick={() => preSlide()} icon={faLessThan} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-3xl rounded-full p-2 bg-black/20 text-white curosr-pointer">
            <FontAwesomeIcon onClick={() => nextSlide()} icon={faGreaterThan} />
        </div>
        </div>  
    )
}
export default BottomDiv;

// {mock.filter((item) => item.category === "smartphones").map((item) => {return (
//     <div key={generateUniqueID()}>
//         <h4>{item.title}</h4>
//             {item.images.map((img) => {return(
//                 <img key={generateUniqueID()} src={img} alt={item.title}/>
//             )})}
//         <h5>{item.brand}</h5>
//     </div>
// )})}