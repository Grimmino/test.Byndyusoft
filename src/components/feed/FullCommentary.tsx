import React from 'react';

export class FullCommentary extends React.Component<IFullCommentary> {
    render() {
        const { item, close } = this.props;
        console.log(item);
        return (
            <div className='modal'>
                <div className='modal__inner'>
                    <div className='modal__header'>
                        <div className='modal__label'>{item.label}</div>
                        <div className='modal__close' onClick={close}></div>
                    </div>

                    <div className='modal__date'>{item.date}</div>

                    <div className='modal__body'>{item.body}</div>
                </div>
            </div>
        );
    }
}

interface IFullCommentary {
    item: FullCommentaryType;
    close: any;
}

type FullCommentaryType = {
    label?: string;
    body?: string;
    date?: number;
};
