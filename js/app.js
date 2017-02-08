var react_news = [
	{
		author: 'Валерон',
		text: 'Реакт ваще...',
		bigText: 'Реакт ваще по масти. От души парняги замутили.'
	},
	{
		author: 'Всеволод Володарчанских',
		text: 'Истинное удовольствие...',
		bigText: 'Истинное эстетическое и профессиональное удовольствие доставить способна небезызвестная библиотека Реакт, анонсированная нашими заморскими коллегами.'
	},
	{
		author: 'Дима Юшкин',
		text: 'Только недавно начал...',
		bigText: 'Только недавно начал писать на фреймвокре реакт. Очень нравиться стили в ней писать.'
	}
];

var Article = React.createClass({
	propTypes: {
		item: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired
		})
	},
	getInitialState: function() {
		return {
			visible: false
		};
	},
	onReadmoreClickHandler: function(event) {
		event.preventDefault();
		var visibility = this.state.visible;
		this.setState({ visible: !visibility });
	},
	render: function () {
		var author = this.props.item.author,
			text = this.props.item.text,
			bigText = this.props.item.bigText,
			visible = this.state.visible;
		return (
			<div className="news" >
				<p className="news__author">{author}:</p>
				{ !visible && <p className="news__text">{text}</p> }
				{ visible && <p className="news__big-text">{bigText}</p> }
				<a
					href="#"
					onClick={this.onReadmoreClickHandler}
					className="news__readmore">
					{visible ? 'Скрыть' : 'Подробнее'}
				</a>
			</div>
		)
	}
});

var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},

	render: function() {
		var data = this.props.data;
		var newsPack;

		if (data.length > 0) {
			newsPack = data.map(function(item) {
				return (
					<Article key={Math.random()} item={item} />
				)
			});
			newsPack.push(<strong className="news__count">Всего новостей: {data.length}</strong>);
		} else {
			newsPack = <p>К сожалению новостей нет</p>;
		}

		return (
			<div className="news">
				{newsPack}
			</div>
		);
	}
});

var Add = React.createClass({
	render: function() {
		return (
			<form className="adding">
				<input
					className="adding__author"
					type="text"
					placeholder="Автор">
				</input>
				<textarea
					className="adding__text"
					placeholder="Текст новости"
				></textarea>
				<label className='adding__checkers'>
					<input type='checkbox' defaultChecked={false} ref='checkrule' />Я согласен с правилами
				</label>
				<button
					className="adding__button">
					Показать
				</button>
			</form>
		)
	}
})

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h3>Новости React</h3>
				<Add />
				<News data={react_news} />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);