import React from 'react';

export class Reply extends React.Component<IReply> {
    render() {
        return (
            <div className='reply'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci commodi architecto quibusdam soluta odio
                exercitationem explicabo fugit eius illo ullam.
                <div className='reply__deep'>
                    <div className='reply__deep-list'>
                        <div className='reply'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam.</div>
                    </div>
                </div>
            </div>
        );
    }
}
interface IReply {}
