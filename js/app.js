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
)
let text = document.getElementsByTagName('textarea')[0];
let para = text.innerText;
let show = document.getElementsByTagName('p')[0];
let x = document.getElementsByClassName('btn btn-success')[0];
x.addEventListener('click',()=>{;document.getElementsByTagName('div')[1].hidden = 'true'});