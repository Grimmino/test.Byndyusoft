import React from 'react';
import { Reply } from './Reply';
import { ReplyForm } from '../ReplyForm';
import { generator, random } from '../../../js/postGenerator';

export class RepliesList extends React.Component<IRepliesList, StateReplies> {
    state = {
        replies: []
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
            date: this.getRandomDate(),
            likes: random(-20, 20)
        };

        this.setState((state) => ({
            replies: state.replies.concat(reply)
        }));
    };

    render() {
        const { replies } = this.state;
        return (
            <React.Fragment>
                <div className='replies__list'>
                    {replies.map((item, index) => (
                        <Reply key={index} reply={item} />
                    ))}
                </div>

                <ReplyForm addNewReplay={this.addNewReplay} generate={this.generateRandomReply} />
            </React.Fragment>
        );
    }
}

interface IRepliesList {}

type StateReplies = {
    replies: any[];
};
