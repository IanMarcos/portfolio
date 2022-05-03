import React from 'react';
import { Link } from 'gatsby';
import { centerContent, four0four, rightSide } from './style.module.css';

const NotFoundPage = () => {
  return (
    <div className={centerContent}>
      <div className={four0four}>
        <div>
          <h1>404</h1>
        </div>
        <div className={rightSide}>
          <h2>Esta página no existe</h2>
          <Link to="/"><button>Inicio</button></Link>
        </div>
      </div>
      <div className='top-minus-one'>
        <pre>{`_      _      _
 <(.)__ >(.)__ <(.)__
   (___/  (___/  (___/ `}</pre>
        </div>
    </div>
  )
}
export default NotFoundPage;
