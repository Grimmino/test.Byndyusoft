import React from 'react';
import { PostType } from '../general/types';
import { posts } from '../js/postGenerator';

import { ShortPost } from './feed/ShortPost';
import { Post } from './feed/Post';

export class App extends React.Component<IApp, StateApp> {
    state = {
        isShowPost: false,
        currentPost: {
            id: 0,
            title: '',
            body: [],
            date: Date.now()
        }
    };

    showFullPost = (post: PostType) => {
        this.setState({
            isShowPost: true,
            currentPost: post
        });
    };

    closePost = () => {
        this.setState({
            isShowPost: false
        });
    };

    render() {
        const { isShowPost, currentPost } = this.state;
        return (
            <div className='container feed'>
                <h1 className='feed__title'>posts</h1>

                <div className='feed__body'>
                    {posts.map((item: any, index: number) => (
                        <ShortPost key={index} post={item} showFullPost={this.showFullPost} />
                    ))}

                    {isShowPost ? <Post post={currentPost} closePost={this.closePost} /> : null}
                </div>
            </div>
        );
    }
}

interface IApp {}

type StateApp = {
    isShowPost: boolean;
    currentPost: PostType;
};
