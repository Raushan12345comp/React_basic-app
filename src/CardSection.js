import React from 'react';
import Card from './Card';

const CardSection = () => {
  return (
    <div>
      <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">We love new friends!</h2>
          <div className="row">
            <div className="col-4">
              <Card />
            </div>
            <div className="col-4">
             <Card tittle="2nd card" description="2nd description"/>
            </div>
            <div className="col-4">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
