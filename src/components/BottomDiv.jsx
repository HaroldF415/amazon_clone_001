import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function BottomDiv ({mock, generateUniqueID}) {
    const [currentIndexLap, setCurrentIndexLap] = useState(0);
    const [currentIndexFrag, setCurrentIndexFrag] = useState(0);
    // make a random generator function to pick the catorgory for the carousel

    const filterByCatLap = mock.filter((item) => item.category === "laptops").flatMap((item) => item.images);
    const filterByCatFrag = mock.filter((item) => item.category === "fragrances").flatMap((item) => item.images);
    
    function preSlideLap () {
        const newIndex = currentIndexLap === 0 ? filterByCatLap.length - 1 : currentIndexLap - 1; 
        setCurrentIndexLap(newIndex);
        console.log(currentIndexLap)
    }

    function preSlideFrag () {
        const newIndex = currentIndexFrag === 0 ? filterByCatFrag.length - 1 : currentIndexFrag - 1; 
        setCurrentIndexFrag(newIndex);
        console.log(currentIndexFrag)
    }

    function nextSlideLap () {
        const newIndex = currentIndexLap === filterByCatLap.length - 1 ? 0 : currentIndexLap + 1;
        setCurrentIndexLap(newIndex);
        console.log(currentIndexLap)
    }

    function nextSlideFrag () {
        const newIndex = currentIndexFrag === filterByCatFrag.length - 1 ? 0 : currentIndexFrag + 1;
        setCurrentIndexFrag(newIndex);
        console.log(currentIndexFrag)
    }

    return (
        <div className="grid grid-cols-2">
        <div className="max-w-[700px] h-[500px] w-full m-auto py-16 px-4 relative group bg-white">
            <h4 className="text-xl font-bold my-5" >Laptops</h4>
            <div style={{backgroundImage: `url(${filterByCatLap[currentIndexLap]})`}}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            key={generateUniqueID()
            }>
            </div> 
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-10 text-3xl p-2 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={() => preSlideLap()} icon={faLessThan} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-10 text-3xl p-2 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={() => nextSlideLap()} icon={faGreaterThan} />
        </div>
        </div>
        <div className="max-w-[700px] h-[500px] w-full m-auto py-16 px-4 relative group bg-white">
            <h4 className="text-xl font-bold my-5" >Fragrances</h4>
            <div style={{backgroundImage: `url(${filterByCatFrag[currentIndexFrag]})`}}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            key={generateUniqueID()
            }>
            </div> 
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-10 text-3xl p-2 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={() => preSlideFrag()} icon={faLessThan} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-10 text-3xl p-2 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={() => nextSlideFrag()} icon={faGreaterThan} />
        </div>
        </div>  
        </div>  
        
    )
}
export default BottomDiv;