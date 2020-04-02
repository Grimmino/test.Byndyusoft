import React from 'react';

export class Reply extends React.Component<IReply> {
    render() {
        const { reply } = this.props;
        return (
            <div className='reply'>
                <div className='reply__header'>
                    <a className='reply__name' href='#'>
                        {reply.firstName}
                    </a>

                    <div className='reply__date'>{reply.date}</div>

                    <div className='reply__answer'>Ответить</div>
                </div>
                <div className='reply__body'>{reply.body}</div>
            </div>
        );
    }
}

interface IReply {
    reply: { [key: string]: any };
}
