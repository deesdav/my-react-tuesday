import { useState, useEffect } from "react";


//useNeco - hook

export default function Clicker() {
    //useState - vytvari promennou ktera ma svuj vlastni setter - metody ktera prenastaveni hodnotu promenne
    //usetate(0) - 0 - hodnota ktera se nastavi pocatecne do cookies
    const [cookies, setCookies] = useState(0);
    const increaseCookies = () => {
        setCookies(cookies + 1);
    }

    //useEffect - () => - fce se zavola kdyz se jakakoliv hodnota v [] zmeni - pro nas hodnotace cookies
    //do [] lze napsat vicero promennych - [cookies, a, b, c] atd.
    //z praxe: tlacitko odebirat napr. yt - kliknete na tlacitko - z tlacitka se udela zrusit odber
    
    useEffect(() => {
        document.title = cookies;
    }, [cookies]);
    
    //pokud do [] nic nedame, tak se () => uavolaji jen pri spuesteni stranky
    //z praxe: nacte se stranka a budeme potrebovat vypsat data z databaze
    
    useEffect(() => {
        document.title = cookies;
    }, [cookies]);
    return (
        <>
        <button onClick={increaseCookies}>Click me</button>
        <p>Cookies: {cookies}</p>
        </>
    );
}
