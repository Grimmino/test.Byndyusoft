import React from 'react';
import { ReplyDeep } from './ReplyDeep';
import { ReplyForm } from '../ReplyForm';
import { generator, random } from '../../../js/postGenerator';

export class RepliesDeepList extends React.Component<IRepliesDeepList, StateRepliesDeepList> {
    state = {
        replies: []
    };

    addNewReplay = (data: any) => {
        this.setState((state) => ({
            replies: state.replies.concat(data)
        }));

        this.props.toggleForm();
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
            date: this.getRandomDate(),
            likes: random(-20, 20)
        };

        this.setState((state) => ({
            replies: state.replies.concat(reply)
        }));

        this.props.toggleForm();
    };

    render() {
        const { replies } = this.state;
        const { setDeep, showForm } = this.props;
        return (
            <React.Fragment>
                <div className='replies__list replies__deep'>
                    {replies.map((item, index) => (
                        <ReplyDeep key={index} reply={item} setDeep={setDeep} />
                    ))}
                </div>

                {showForm ? <ReplyForm addNewReplay={this.addNewReplay} generate={this.generateRandomReply} /> : null}
            </React.Fragment>
        );
    }
}

interface IRepliesDeepList {
    setDeep: boolean;
    showForm: boolean;
    toggleForm: any;
}

type StateRepliesDeepList = {
    replies: any[];
};
