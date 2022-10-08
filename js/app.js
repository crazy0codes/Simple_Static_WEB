let Add = () => {
    return(
        <div>
            <h1>Creating Notes Using React</h1>
            <textarea className="form-control"></textarea>
            <button className="btn btn-success">success</button>
        </div>
    )
}
ReactDOM.render(
    <Add/>,
    document.getElementById('demo'),
    <Add/>,
    document.getElementById('Name')
)