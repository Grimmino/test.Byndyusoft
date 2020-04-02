import React from 'react';
// import { Reply } from './Reply';

export class RepliesList extends React.Component<IRepliesList, StateReplies> {
    render() {
        const { replies } = this.props;
        console.log(replies);
        return (
            <div className='replies__list'>
                {replies.map((item, index) => (
                    <div key={index}>
                        <span>{item.firstName}</span>
                        <span>{item.body}</span>
                    </div>
                ))}
            </div>
        );
    }
}

interface IRepliesList {
    replies: any[];
}

type StateReplies = {};
