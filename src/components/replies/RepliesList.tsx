import React from 'react';
import { Reply } from './Reply';

export class RepliesList extends React.Component<IRepliesList> {
    render() {
        return (
            <div className='replies__list'>
                <Reply />
            </div>
        );
    }
}
interface IRepliesList {}
