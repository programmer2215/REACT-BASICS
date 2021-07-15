// linking existing element
const root_div = document.getElementById('root');

// creating new element using React.createElement()
// const new_element = React.createElement(
//     'ul', 
//     null, 
//     // Array of elements to inject into the ul element
//     [
//         React.createElement('li', null, "Alpha"),
//         React.createElement('li', null, "Bravo"),
//         React.createElement('li', null, "Charlie"),
//         React.createElement('li', null, "Delta"),
//         React.createElement('li', null, "Echo"),
//         React.createElement('li', null, "Foxtrot"),
//     ] 
// );



// const Juliet = 'Juliet'

// // JSX transpiled into JS using Babel. 
// const JSXelement = (
//     <ul>
//         <li>Golf</li>
//         <li>Hotel</li>
//         <li>India</li>
        
//         <li>{Juliet.toUpperCase()}</li>
//     </ul>
// ) 
// render JSX into index.html
// ReactDOM.render(JSXelement, root_div);

// React Component 
const App = () => {
    const Juliet = 'Juliet'
    return (
    <ul>
        <li>Golf</li>
        <li>Hotel</li>
        <li>India</li>
        <li>{Juliet.toUpperCase()}</li>
    </ul>
    )
}

// render React Component into index.html
ReactDOM.render(<App />, root_div);