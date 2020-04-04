import React from 'react';
import { RepliesDeepList } from '../deep/RepliesDeepList';
import { random } from '../../../js/postGenerator';

export class Reply extends React.Component<IReply, StateReply> {
    state = {
        addDeepReply: false,
        showForm: false,
        count: this.props.reply.likes | 0,
        isHide: () => {
            return this.state.count <= -10 ? true : false;
        },
        showBodyReply: false
    };

    addDeepRely = () => {
        this.setState({
            addDeepReply: true
        });

        this.showForm();
    };

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    };

    countPlus = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    countMinus = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    toggleHideReply = () => {
        this.setState({
            showBodyReply: !this.state.showBodyReply
        });
    };

    render() {
        const { addDeepReply, showForm, count, isHide, showBodyReply } = this.state;
        const { reply } = this.props;
        return (
            <React.Fragment>
                <div className='reply'>
                    <div className='reply__avatar'></div>
                    <div className='reply__info'>
                        <div className='reply__header'>
                            <a className='reply__name' href='#'>
                                {reply.firstName}
                            </a>

                            <div className='reply__date'>{reply.date}</div>

                            <div className='reply__likes'>
                                <div className='reply__likes-item' onClick={this.countMinus}>
                                    -
                                </div>
                                <div className='reply__likes-item'>{count}</div>
                                <div className='reply__likes-item' onClick={this.countPlus}>
                                    +
                                </div>
                            </div>

                            <div className='reply__answer' onClick={this.addDeepRely}>
                                Ответить
                            </div>
                        </div>

                        {!isHide() || showBodyReply ? <div className='reply__body'>{reply.body}</div> : null}

                        {this.state.count <= -10 ? (
                            <span className='reply__security' onClick={this.toggleHideReply}>
                                {!showBodyReply ? 'показать' : 'скрыть'}
                            </span>
                        ) : null}
                    </div>
                </div>

                {addDeepReply ? <RepliesDeepList toggleForm={this.showForm} setDeep={true} showForm={showForm} /> : null}
            </React.Fragment>
        );
    }
}

interface IReply {
    reply: { [key: string]: any };
}

type StateReply = {
    addDeepReply: boolean;
    showForm: boolean;
    count: number;
    isHide: any;
    showBodyReply: boolean;
};
