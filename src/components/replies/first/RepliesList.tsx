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

        const date = new Date(random(2019, 2020), random(0, 1), random(1, 31), random(0, 23), random(0, 60), random(0, 60));
        const dateNow = Date.now() - random(1000, 10000) * random(1, 60);

        const randonmDay = Math.random() > 0.5 ? dateNow : date.getTime();

        const res = Date.now() - randonmDay;
        const sec = Number((res / 1000).toFixed());
        const min = Number((sec / 60).toFixed());
        const h = Number((min / 60).toFixed());
        const day = Number((h / 24).toFixed());

        let result = '';

        if (day > 1) {
            result = `${day} дней назад`;
        } else if (h > 1) {
            result = `${h} часов назад`;
        } else if (min > 1) {
            result = `${min} минут назад`;
        } else {
            result = `${sec} секунд назад`;
        }

        return result;
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
