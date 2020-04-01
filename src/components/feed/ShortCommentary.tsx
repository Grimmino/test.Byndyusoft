import React from 'react';

export class ShortCommentary extends React.Component<IShortCommentary, StateShortCommentary> {
    render() {
        const { item, showFull } = this.props;
        return (
            <div className='commentary' onClick={() => showFull(item)}>
                <div className='commentary__label'>{item.label}</div>

                <div className='commentary__date'>{item.date}</div>
            </div>
        );
    }
}

interface IShortCommentary {
    item: ShortCommentaryType;
    showFull: any;
}

type ShortCommentaryType = {
    label: string;
    body: string;
    date: number;
};

type StateShortCommentary = {};
