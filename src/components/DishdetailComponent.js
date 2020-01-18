import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// import LocalHeader from './LocalHeader';

// function RenderCities({ city, onClick }) {
//     return (
//         <Card>
//         <Link to={`/${city.name}`}>
//             <CardImg width="100%" src={city.image} alt={city.name} />
//             <CardImgOverlay>
//             <CardTitle>{city.name}</CardTitle>
//             </CardImgOverlay>
//         </Link>
//         </Card>
//     );
// }

// const City = (props) => {
// const menu = props.destinations.map((destination) => {
//     return (
//     <div key={destination.id} className="col-12 col-md-5 m-1">
//         <RenderCities city={destination} />
//     </div>
//     );
// });

function RenderDestination({destination}) {
        return(
            <div className="col-12 ">
             
                        {/* <CardTitle>{destination.name}</CardTitle> */}
                    <CardText>{destination.description}</CardText>
                    <CardImg className ="col-md-5" width="100%" src={destination.image} alt={destination.name} />
                    {/* <Card>
                    <Link to={`/destinations/${destination.id}`}>
                        <CardImg width="100%" src={destination.image} alt={destination.name} />
                        <CardImgOverlay>
                        <CardTitle>{destination.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                    </Card> */}
                   
            </div>
        )
    }

// function RenderComments({comments, destinationId}){
//     if (comments != null) {
//         let list = comments.map((comments)=>{
//             return(
//                 <li key={comments.id} >
//                     <div className="container">
//                         <p>{comments.comment}</p>
//                         <p>--{comments.author},
//                         {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
//                     </div>
//                 </li>
//             )
//         })

//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <h4>Comments</h4>
//                 <ul className="list-unstyled">
//                     {list}
//                 </ul>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div></div>
//         )
//     }
// }


const DestinationDetail = (props) => {
        
        if (props.destination != null) {
            return(
                <Card>
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to='/destinations'>Destinations</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    <Link>{props.destination.name}</Link>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.destination.name}</h3>
                                {/* <LocalHeader 
                                    destination={props.destination}
                                /> */}
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <RenderDestination destination={props.destination} />
                            {/* <RenderComments 
                                comments={props.comments}
                                destinationId={props.destination.id}
                            /> */}
                        </div>
                    </div>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }



export default DestinationDetail;