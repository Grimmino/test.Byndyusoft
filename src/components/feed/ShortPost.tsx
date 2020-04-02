import React from 'react';
import { PostType } from '../../general/types';

export class ShortPost extends React.Component<IShortPost> {
    render() {
        const { post, showFullPost } = this.props;
        return (
            <div className='spost' onClick={() => showFullPost(post)}>
                <div className='spost__label'>{post.title}</div>

                <div className='spost__date'>{new Date(post.date).toLocaleDateString().toString()}</div>
            </div>
        );
    }
}

interface IShortPost {
    post: PostType;
    showFullPost: any;
}
