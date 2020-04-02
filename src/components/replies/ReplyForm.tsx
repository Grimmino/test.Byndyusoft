import React from 'react';

export class ReplyForm extends React.Component<IReplyForm> {
    handleSubmit = (e: any) => {
        e.preventDefault();

        const data: { [key: string]: any } = {};
        const formData = new FormData(e.target);

        for (let [name, value] of formData) {
            data[name] = value;
        }
        this.props.addNewReplay(data);
    };

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit} noValidate>
                <label>
                    <span>Имя:</span>
                    <input name='firstName' type='text' />
                </label>

                <label>
                    <span>E-mail:</span>
                    <input name='email' type='email' />
                </label>

                <label>
                    <span>Текст комментария:</span>
                    <textarea name='body'></textarea>
                </label>

                <button type='submit'>Добавить комментарий</button>
            </form>
        );
    }
}
interface IReplyForm {
    addNewReplay: any;
}
