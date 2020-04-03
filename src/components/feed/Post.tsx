import React from 'react';
import { PostType } from '../../general/types';
import { RepliesList } from '../replies/first/RepliesList';

export class Post extends React.Component<IPost, StatePost> {
    state = {
        bodyRef: React.createRef<HTMLDivElement>(),
        postLess: false,
        replies: []
    };

    componentDidMount = (): void => {
        if (this.state.bodyRef.current && this.state.bodyRef.current.offsetHeight > 300) {
            this.state.bodyRef.current.classList.add('post__body--less');
            this.setState({
                postLess: true
            });
        }
    };

    showFullBody = (): void => {
        if (this.state.bodyRef.current) {
            this.state.bodyRef.current.classList.toggle('post__body--less');

            this.setState({
                postLess: !this.state.postLess
            });
        }
    };

    render() {
        const { post, closePost } = this.props;
        const { bodyRef, postLess } = this.state;
        return (
            <div className='post'>
                <div className='post__inner'>
                    <div className='post__header'>
                        <div className='post__label'>{post.title}</div>
                        <div className='post__close' onClick={closePost}>
                            <svg className='post__close-icon'>
                                <use xlinkHref='#close'></use>
                            </svg>
                        </div>
                    </div>

                    <div className='post__date'>{post.date}</div>

                    <div className='post__body' ref={bodyRef}>
                        {post.body.map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {postLess ? (
                        <div onClick={this.showFullBody} className='post__body-showfull'>
                            показать полностью
                        </div>
                    ) : null}

                    <div className='post__replies replies'>
                        <RepliesList />
                    </div>
                </div>
            </div>
        );
    }
}

interface IPost {
    post: PostType;
    closePost: any;
}

type StatePost = {
    bodyRef: React.RefObject<HTMLDivElement>;
    postLess: boolean;
    replies: any[];
};
