import React from 'react';

const ListPosts = ({title,text,PostType,posts,urlClassMoreInfo,isAdaptive}) => {

    const classContainer = ['container'];
    if (!isAdaptive){
        classContainer.push("mx-0 px-0");
    }
    return (
        <div className={classContainer.join(' ')}>
            {title ?
                <div className="p-3 d-none d-md-block">
                    <h1 className="text-center mx-auto">{title}</h1>
                    <p className="text-center mx-auto w-50">{text}</p>
                </div>
            : null}
            <div className={classContainer.join(' ')}>
                {isAdaptive ?
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                        { PostType ?
                            posts.map((obj,index)=>{
                                return (
                                    <PostType key={posts[index]?.name + index}  {...posts[index]} urlClassMoreInfo={urlClassMoreInfo}/>
                                )
                            })
                            : null}
                    </div>
                    :
                    <div className="d-flex">
                        { PostType ?
                            posts.map((obj,index)=>{
                                return (
                                    <PostType key={posts[index]?.name + index}  {...posts[index]} urlClassMoreInfo={urlClassMoreInfo}/>
                                )
                            })
                            : null}
                    </div>
                }

            </div>
        </div>
    );
};

export default ListPosts;