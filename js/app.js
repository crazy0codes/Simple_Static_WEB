const heading = React.createElement(
    'h1',
    {id:'abc'},
    'this is a heading'
);

ReactDom.render(
    heading,

    document.getElementById('react-container')
)