import React from 'react';
import Header from '../view/Header';
import Footer from '../view/Footer';
import { useState } from 'react';


function Details(){

    const[image, setImage] = useState("../image/nikeBlue.webp")
    const [description, setDescription] = useState("show-desc")
    const [material, setMaterial] = useState("hide-desc")
    const [size, setSize] = useState("hide-desc")
    const [review, setReview] = useState("hide-desc")

    function changeToBlack(){
        setImage("../image/nikeBlack.jpeg")
    }

    function changeToGray(){
        setImage("../image/nikeGray.webp")
    }
    function changeToBlue(){
        setImage("../image/nikeBlue.webp")
    }

    function showDesc(){
        setDescription("show-desc")
        setMaterial("hide-desc")
        setSize("hide-desc")
        setReview("hide-desc")
    }

    function showMaterial(){
        setDescription("hide-desc")
        setMaterial("show-desc")
        setSize("hide-desc")
        setReview("hide-desc")
    }

    function showSize(){
        setDescription("hide-desc")
        setMaterial("hide-desc")
        setSize("show-desc")
        setReview("hide-desc")
    }

    function showReview(){
        setDescription("hide-desc")
        setMaterial("hide-desc")
        setSize("hide-desc")
        setReview("show-desc")
    }

    return(
        <>
            <Header />
            <div className="heading">
                <h1>Product Details</h1>
            </div>
            <div className="product-details">
                <div className="details-img">
                    <img src={image} alt="" width="100%"/>
                </div>
                <div className="details-desc">
                    <div className="desc-top">
                        <div className="product-info">
                            <p>NIKE x Stussy</p>
                            <h1>Sweat Shirt</h1>
                            <h2>$120.0</h2>
                            <div className="color">
                                <p className="black" onClick={changeToBlack}></p>
                                <p className="gray" onClick={changeToGray}></p>
                                <p className="blue" onClick={changeToBlue}></p>
                            </div>
                            <p>★★★★☆(120 Review)</p>
                        </div>
                        <div className="desc-button">
                            <button>Add To Cart</button>
                            <button>Add To Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc-bottom">
                <ul>
                    <li className="select-desc" onClick={showDesc}>Description</li>
                    <li className="select-desc" onClick={showMaterial}>Material</li>
                    <li className="select-desc" onClick={showSize}>Size</li>
                    <li className="select-desc" onClick={showReview}>Review</li>
                </ul>
                <div className={description}>
                    <p>Description<hr/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore nulla necessitatibus dicta magnam officia cum provident nisi repellat vero quis voluptas similique itaque distinctio sed nostrum amet, maiores dolorem sapiente enim ea? Necessitatibus illo eum maxime repellendus animi consequatur excepturi minus neque quaerat reiciendis iste ducimus vero nulla maiores in soluta nesciunt vel rerum ipsum recusandae ipsa, aspernatur tempora. Omnis voluptate dolorem nisi cumque? Obcaecati voluptas iure, accusantium nemo odit minima consequatur deserunt porro natus id, pariatur, at molestiae maxime perferendis quibusdam nisi incidunt maiores fugiat saepe voluptatibus sequi. Ut ullam deserunt quibusdam recusandae voluptates distinctio impedit officiis.</p>
                </div>
                <div className={material}>
                    <p>Material<hr/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore nulla necessitatibus dicta magnam officia cum provident nisi repellat vero quis voluptas similique itaque distinctio sed nostrum amet, maiores dolorem sapiente enim ea? Necessitatibus illo eum maxime repellendus animi consequatur excepturi minus neque quaerat reiciendis iste ducimus vero nulla maiores in soluta nesciunt vel rerum ipsum recusandae ipsa, aspernatur tempora. Omnis voluptate dolorem nisi cumque? Obcaecati voluptas iure, accusantium nemo odit minima consequatur deserunt porro natus id, pariatur, at molestiae maxime perferendis quibusdam nisi incidunt maiores fugiat saepe voluptatibus sequi. Ut ullam deserunt quibusdam recusandae voluptates distinctio impedit officiis.</p>
                </div>
                <div className={size}>
                    <p>Size<hr/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore nulla necessitatibus dicta magnam officia cum provident nisi repellat vero quis voluptas similique itaque distinctio sed nostrum amet, maiores dolorem sapiente enim ea? Necessitatibus illo eum maxime repellendus animi consequatur excepturi minus neque quaerat reiciendis iste ducimus vero nulla maiores in soluta nesciunt vel rerum ipsum recusandae ipsa, aspernatur tempora.</p>
                </div>
                <div className={review}>
                    <p>Review<hr/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore nulla necessitatibus dicta magnam officia cum provident nisi repellat vero quis voluptas similique itaque distinctio sed nostrum amet, maiores dolorem sapiente enim ea? Necessitatibus illo eum maxime repellendus animi consequatur excepturi minus neque quaerat reiciendis iste ducimus vero nulla maiores in soluta nesciunt vel rerum ipsum recusandae ipsa, aspernatur tempora. Omnis voluptate dolorem nisi cumque? Obcaecati voluptas iure, accusantium nemo odit minima consequatur deserunt porro natus id, pariatur, at molestiae maxime perferendis quibusdam nisi incidunt maiores fugiat saepe voluptatibus sequi. Ut ullam deserunt quibusdam recusandae voluptates distinctio impedit officiis.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Details;