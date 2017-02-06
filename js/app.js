var react_news = [
	{
		author: 'Валерон',
		text: 'Реакт ваще по масти. От души парняги замутили.'
	},
	{
		author: 'Всеволод Володарчанских',
		text: 'Истинное эстетическое и профессиональное удовольствие доставить способна небезызвестная библиотека Реакт, анонсированная нашими заморскими коллегами.'
	},
	{
		author: 'Дима Юшкин',
		text: 'Только недавно начал писать на фреймвокре реакт. Очень нравиться стили в нет писать.'
	}
];

var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				К сожалению, новостей нет.
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function() {
		return (
			<div className="comments">
				Нет новостей - комментировать нечего.
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				Всем привет, я компонент App!
				<News data={react_news} />
				<Comments />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);