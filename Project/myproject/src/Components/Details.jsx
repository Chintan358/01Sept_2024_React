import { useContext, useEffect, useState } from "react"
import { ProductListcontext } from "../store/ProductList-store"
import { useLocation } from "react-router-dom"


const Details =  ()=>{
    
    const location =  useLocation()
    const id = location.state
    
    const [currentProduct, setCurrentProduct] = useState({images:[],reviews:[]});
    useEffect(() => {  

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(result=>{
            setCurrentProduct(result);
            
        });

    }, []);

    
    
    
   
    
    return  <div className="container-fluid py-5">
        
    <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner border">

                    {currentProduct.images.map(ele=>
                    <div className="carousel-item active">
                        <img className="w-100 h-100" src={ele} alt="Image"/>
                    </div>
                  )}
                </div>
                <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                </a>
                <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                </a>
            </div>
        </div>

        <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{currentProduct.title}</h3>
            <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                    <small className="fa fa-star"></small>
                    <small className="fa fa-star"></small>
                    <small className="fa fa-star"></small>
                    <small className="fa fa-star-half-alt"></small>
                    <small className="fa fa-star"></small>
                </div>
                <small className="pt-1">({currentProduct.reviews.length} Reviews)</small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">${currentProduct.price}</h3>
            <p className="mb-4">{currentProduct.description}</p>
          
          
            <div className="d-flex align-items-center mb-4 pt-2">
                <div className="input-group quantity mr-3" style={{width: "130px"}}>
                    <div className="input-group-btn">
                        <button className="btn btn-primary btn-minus" >
                        <i className="fa fa-minus"></i>
                        </button>
                    </div>
                    <input type="text" className="form-control bg-secondary text-center" value="1"/>
                    <div className="input-group-btn">
                        <button className="btn btn-primary btn-plus">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
            </div>
            <div className="d-flex pt-2">
                <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                <div className="d-inline-flex">
                    <a className="text-dark px-2" href="">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fa fa-linkedin-in"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fa fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="row px-xl-5">
        <div className="col">
            <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews ({currentProduct.reviews.length})</a>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                    <h4 className="mb-3">Product Description</h4>
                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                    <h4 className="mb-3">Additional Information</h4>
                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0">
                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                </li>
                                <li className="list-group-item px-0">
                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                </li>
                                <li className="list-group-item px-0">
                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                </li>
                                <li className="list-group-item px-0">
                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                </li>
                              </ul> 
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0">
                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                </li>
                                <li className="list-group-item px-0">
                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                </li>
                                <li className="list-group-item px-0">
                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                </li>
                                <li className="list-group-item px-0">
                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                </li>
                              </ul> 
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="mb-4">{currentProduct.reviews.length} review for "{currentProduct.title}"</h4>
                            {currentProduct.reviews.map(ele=>
                                <div className="media mb-4">
                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                <div className="media-body">
                                    <h6>{ele.reviewerName}<small> - <i>{ele.date}</i></small></h6>
                                    <div className="text-primary mb-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>{ele.comment}</p>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-4">Leave a review</h4>
                            <small>Your email address will not be published. Required fields are marked *</small>
                            <div className="d-flex my-3">
                                <p className="mb-0 mr-2">Your Rating * :</p>
                                <div className="text-primary">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="message">Your Review *</label>
                                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email *</label>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default Details