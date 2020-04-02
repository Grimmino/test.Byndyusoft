import React from 'react';

export class Reply extends React.Component<IReply> {
    render() {
        const { data } = this.props;
        return (
            <div className='reply'>
                <span>{data.name}</span>
                <p>{data.body}</p>
                <div className='reply__deep'>
                    <div className='reply__deep-list'>
                        <div className='reply'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam.</div>
                    </div>
                </div>
            </div>
        );
    }
}
interface IReply {
    data: { [key: string]: any };
}

{
    /* <div className='reply__deep'>
                    <div className='reply__deep-list'>
                        <div className='reply'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam.</div>
                    </div>
                </div> */
}
