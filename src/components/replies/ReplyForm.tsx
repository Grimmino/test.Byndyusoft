import React from 'react';

export class ReplyForm extends React.Component<IReplyForm> {
    handleSubmit = (e: any) => {
        e.preventDefault();

        let valid: boolean = true;

        const data: { [key: string]: any } = {};
        const formData = new FormData(e.target);

        for (let [name, value] of formData) {
            if (value === '') {
                valid = false;
            } else {
                data[name] = value;
            }
        }

        if (valid !== false) {
            data.date = new Date(Date.now()).toLocaleDateString().toString();
            this.props.addNewReplay(data);
            e.target.classList.contains('error') ? e.target.classList.remove('error') : null;
        } else {
            e.target.classList.add('error');
        }
    };

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit} noValidate>
                <label className='form__field'>
                    <span className='form__field-title'>Имя:</span>
                    <input className='form__input' name='firstName' type='text' />
                </label>

                <label className='form__field'>
                    <span className='form__field-title'>E-mail:</span>
                    <input className='form__input' name='email' type='email' />
                </label>

                <label className='form__field'>
                    <span className='form__field-title'>Текст комментария:</span>
                    <textarea className='form__input form__textarea' name='body'></textarea>
                </label>

                <div className='form__footer'>
                    <button className='btn form__btn' type='submit'>
                        Добавить комментарий
                    </button>

                    <button type='reset' className='btn' onClick={this.props.generate}>
                        Сгенерировать комментарий
                    </button>
                </div>
            </form>
        );
    }
}
interface IReplyForm {
    addNewReplay: any;
    generate: any;
}
