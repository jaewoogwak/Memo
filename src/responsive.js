import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import './App.css';

function Responsive () {
    const isPc =useMediaQuery({
        query: "(min-width:1024px) and (max-width: 1279px)"
    });
    const isMobile = useMediaQuery({
        query:"(max-width: 767px)"
    });

    return (
        <div className = "App">
            {isPc && <div>pc</div>}
            {isMobile && <div>mobile</div>}
        </div>
    )
}

export default Responsive;

