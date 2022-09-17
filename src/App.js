import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
return (
    <StrictMode>
        <BrowserRouter>
        <header className="m-auto text-cyan-900 text-5xl no-underline font-sans font-bold">
            <Link to="/">
            Gutenberg Library
            </Link>
        </header>
        <Routes>
            <Route path="/" element={<SearchParams/>}/>
        </Routes>
    </BrowserRouter>
    </StrictMode>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);