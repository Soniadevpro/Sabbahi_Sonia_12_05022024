

import kasaPic from '../../assets/kasa3.png';
import sophiaPic from '../../assets/sophiabluel.png';
import argetnPics from '../../assets/argentbank.png';



function Card() {
  return (
    <div className='container-card'>

    <figure className="image-block">
      <h1>Sophia Bluel Architecte</h1>
      <img src={sophiaPic} alt="" />
      <figcaption>
        <h3>Plus d'informations</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <button>Github</button>
      </figcaption>
    </figure>
      <figure className="image-block">
      <h1>KASA</h1>
      <img src={kasaPic} alt="" />
      <figcaption>
        <h3>Plus d'informations</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <div className="position-button">

        <button className='button-card'>Github</button>
        <button className='button-card'>Github</button>
        </div>
      </figcaption>
    </figure>
    <figure className="image-block">
      <h1>ARGENT BANK Application bancaire</h1>
      <img src={argetnPics} alt="" />
      <figcaption>
        <h3>Plus d'informations</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <button>Github</button>
      </figcaption>
    </figure>
    </div>
  );
}

export default Card;

