const heading = React.createElement(
    'h1',
    {id:'abc'},
    'this is a heading'
);

ReactDom.render(
    heading,

    document.getElementById('react-container')
);
const Something = React.createElement(
    'div',
    {class:'abc'},
    'p',
    'Crested by Madhan'
);

ReactDom.render(
    Something,
    document.getElementById('react-container-2')
);