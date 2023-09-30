//1. BASIC RENDER
//ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById('root'));

//2. RENDER ANYHTING
// ReactDOM.render(<h1>Lucky number is : {Math.floor(Math.random() * 10)}</h1>, document.getElementById('root'));

//3. CREATE A LIST
// ReactDOM.render(
// <div>
//         <p>This is the Shopping list</p>
//         <ul>
//             <li>3pcs Apples</li>
//             <li>2pcs Banana</li>
//             <li>4pcs Lemon</li>

//         </ul>

//         </div>

// , document.getElementById('root'));


//4. CREATE A SAMPLE MENU 
// function Navbar() {
    // return(
    //     <div>
    //     <h1>Company Name</h1>
    //     <ul>
    //         <li>About us</li>
    //         <li>Projects</li>
    //         <li>Contact us</li>
    
    //     </ul>
    //     </div>
    //     )
    
    // }
    
    
    // ReactDOM.render(
    
    //     <div>
    //         <Navbar />
    //     </div>
    
    // , document.getElementById('root'));
    
//5. IMPERATIVE JS
// const h1 = document.createElement('h1');
// h1.textContent = 'This is an imperative way to program';
// h1.className = 'header';
// document.getElementById('root').appendChild(h1);

//6. CREATE A NAV BAR IN JSX


const navbar = (
    <nav>
        <h1>The W3bsit3</h1>

        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
)



ReactDOM.render(navbar, document.getElementById('root'));





