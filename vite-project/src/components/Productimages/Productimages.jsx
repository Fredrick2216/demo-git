import {Bmw_image} from "../../assets/Bmw_image";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Productimages = () => (
  <div>
    <LazyLoadImage
      alt={Bmw_image}
      effect="blur"
      wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "0.25s"},
    }}
    className="h-52"
    src={Bmw_image} />
    <img src={Bmw_image} alt='bmw' className="h-52"/>;
  </div>
);



export default Productimages