import React from "react";
import Avatar from '../images/avatar2.jpg';

function Home(){
    return(
        <article className="w-4/6 mx-auto bg-slate-500 p-5 rounded">
            <div className="flex flex-row justify-center items-center h-3/4 mr-5">
            <div className="w-1/2 bg-cover bg-center">
                <img className="rounded-full" src={Avatar} alt="avatar stylé" />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center h-3/4 ml-5">
                <h1 className="text-4xl font-bold align-top">Bienvenue sur mon portfolio</h1>
                <p className="text-lg align-top text-justify">
                Passionné par le numérique depuis toujours, j'ai plongé pendant 15 ans dans le monde de la formation. Aujourd'hui, je suis ravi de partager avec vous ma nouvelle aventure : le développement web. Inspiré par les univers fantastiques de la science-fiction et des jeux vidéo, je crée des expériences numériques immersives et intuitives.
                </p>
            </div>
            </div>

        </article>
    )
}
export default Home;