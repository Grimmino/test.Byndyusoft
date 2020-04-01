import React from 'react';
import commentaries from '../db/commentaries.json';

import { ShortCommentary } from './feed/ShortCommentary';
import { FullCommentary } from './feed/FullCommentary';

export class App extends React.Component<IApp, StateApp> {
    state = {
        isShow: false,
        currentCommentary: {}
    };

    showCommentary = (item: Commentary) => {
        this.setState({
            isShow: true,
            currentCommentary: item
        });
    };

    closeCommentary = () => {
        this.setState({
            isShow: false
        });
    };

    render() {
        const { isShow, currentCommentary } = this.state;
        return (
            <div className='container feed'>
                {commentaries.map((item, index) => (
                    <ShortCommentary key={index} item={item} showFull={this.showCommentary} />
                ))}

                {isShow ? <FullCommentary item={currentCommentary} close={this.closeCommentary} /> : null}
            </div>
        );
    }
}

interface IApp {}

type Commentary = {
    label: string;
    body: string;
    date: number;
};

type StateApp = {
    isShow: boolean;
    currentCommentary: any;
};
