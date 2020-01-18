import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
function RenderDestinations({ destination, onClick }) {
  return (
    <Card>
      <Link to={`/${destination.id}`}>
        <CardImg width="100%" src={destination.image} alt={destination.name} />
        <CardImgOverlay>
          <CardTitle>{destination.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.destinations.map((destination) => {
    return (
      <div key={destination.id} className="col-12 col-md-5 m-1">
        <RenderDestinations destination={destination} />
      </div>
    );
  });
  
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link>Destinations</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Destinations</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        { menu }
      </div>
    </div>
    );
}



export default Menu;