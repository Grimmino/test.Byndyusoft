import React from 'react';
import { ReplyDeep } from './ReplyDeep';
import { ReplyForm } from '../ReplyForm';
import { generator, random } from '../../../js/postGenerator';

export class RepliesDeepList extends React.Component<IRepliesDeepList, StateRepliesDeepList> {
    state = {
        replies: [],
        hideReplies: true
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

        this.props.toggleForm();
    };

    showHideReplies = () => {
        this.setState({
            hideReplies: !this.state.hideReplies
        });
    };

    render() {
        const { replies, hideReplies } = this.state;
        const { setDeep, showForm } = this.props;
        return (
            <React.Fragment>
                <div className='replies__list replies__deep'>
                    {replies.map((item, index: number) =>
                        hideReplies ? (
                            index == 0 ? (
                                <ReplyDeep key={index} reply={item} setDeep={setDeep} />
                            ) : null
                        ) : (
                            <ReplyDeep key={index} reply={item} setDeep={setDeep} />
                        )
                    )}

                    {replies.length > 1 ? (
                        <div className='replies__toggler' onClick={this.showHideReplies}>
                            {hideReplies ? 'показать комментарии' : 'скрыть комментарии'}
                        </div>
                    ) : null}
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
    hideReplies: boolean;
};
