import React from 'react';
import { PostType } from '../../general/types';
import { RepliesList } from '../replies/RepliesList';
import { ReplyForm } from '../replies/ReplyForm';
import { generator } from '../../js/postGenerator';

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

    addNewReplay = (data: any) => {
        this.setState((state) => ({
            replies: state.replies.concat(data)
        }));
    };

    getRandomDate = () => {
        const random = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const date = new Date(random(2019, 2020), random(0, 1), random(1, 31)).toLocaleDateString().toString();

        return date;
    };

    generateRandomReply = () => {
        const reply = {
            firstName: generator(1, 2),
            email: '123@123.ru',
            body: generator(15, 50),
            date: this.getRandomDate()
        };

        this.setState((state) => ({
            replies: state.replies.concat(reply)
        }));
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

                    <div className='post__date'>{new Date(post.date).toLocaleDateString().toString()}</div>

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
                        <RepliesList replies={this.state.replies} />
                        <ReplyForm addNewReplay={this.addNewReplay} generate={this.generateRandomReply} />
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
