import React from 'react';

const ListPosts = (props) => {
    return (
        <div className="container shadow pt-3">
            <div className="p-3 d-none d-md-block">
                <h1 className="text-center mx-auto">{props?.title}</h1>
                <p className="text-center mx-auto w-50">{props?.text}</p>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                { props.postType ?
                    props?.posts.map((obj,index)=>{
                       return (
                           <props.postType key={props.posts[index]?.name + index}  {...props.posts[index]} urlClassMoreInfo={props?.urlClassMoreInfo}/>
                           )
                    })
                : null}
                </div>
            </div>
        </div>
    );
};

export default ListPosts;