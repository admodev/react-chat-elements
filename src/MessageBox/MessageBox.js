import React, { Component } from 'react';
import './MessageBox.css';

import PhotoMessage from '../PhotoMessage/PhotoMessage';
import FileMessage from '../FileMessage/FileMessage';

const classNames = require('classnames');

export class MessageBox extends Component {
	render() {
		var positionCls = classNames('rce-mbox', { 'rce-mbox-right' : this.props.position === 'right' });

		return (
			<div className="rce-container-mbox">
				<div
					className={positionCls}>
					{
						this.props.type === 'text' &&
						<div className="rce-mbox-text">
							{this.props.text}
						</div>
					}

					{
						this.props.type === 'photo' &&
						<PhotoMessage
							data={this.props.data}
							text={this.props.text}/>
					}
					{
						this.props.type === 'file' &&
						<FileMessage
							data={this.props.data}
							text={this.props.text}/>
					}
					<div className="rce-mbox-time rce-mbox-right">
						12:30
					</div>

					<svg className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M0 0v20L20 0"/>
					</svg>
				</div>
			</div>
		);
	}
}

MessageBox.defaultProps = {
	position: 'left',
	type: 'text',
	text: '',
	data: {},
};


export default MessageBox;