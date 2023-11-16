// import logo from './logo.svg';

export default function Footer(props){
    // no alternative option
    // return props.dataFromApi && <footer>
    //     <p>© Coder 2023, May cohort</p>
    //     <a href="https://github.com/JairoAussie/t3w5-reactjs">The GitHub repo</a>
    // </footer>
    
    // alternative with ternary
    // return props.dataFromApi ? <footer>
    //     <p>© Coder 2023, May cohort</p>
    //     <a href="https://github.com/JairoAussie/t3w5-reactjs">The GitHub repo</a>
    //     </footer>
    //     :
    //     <p>Loading...</p>

    //alternative with short circuit logic
    return (props.dataFromApi && <footer>
        <p>© Coder 2023, May cohort</p>
        <a href="https://github.com/JairoAussie/t3w5-reactjs">The GitHub repo</a>
        </footer>
    ) ||
        <p>Loading...</p>
    
}

