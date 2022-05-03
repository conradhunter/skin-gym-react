import React from 'react';
import blogimg from "../assets/logo_trans-cropped.png";

const Blog = () => {
    return (
        <div className="blog__page">
            <div className="row">
                <div className="blog__container">
                    <figure>
                        <img src={blogimg} alt="" className="blog__img" />
                    </figure>
                    <h1 className="blog__heading">Blogs coming in 2022</h1>
                    <h2>Join our mailing list for updates on our blogs!</h2>
                    <div id='blog__input--ml'>
                        <input id='blog__input' type="email" />
                        <button className="btn blog__btn">Join</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
