import {useState} from 'react'
import reactLogo from './assets/react.svg'


function Home() {

    return (
        <div className="flex h-screen w-screen">
            <div className="flex bg-back bg-cover bg-center bg-no-repeat">
                <div className="flex w-full h-full justify-center items-center">
                 <div className="flex flex-col gap-y-10 w-1/4 border-2 border-amber-900">
                        <div className="flex flex-col h=1/5 border-2 border-amber-900">Mon logo</div>
                        <div className="flex flex-col h=4/5">
                            <div className="flex flex-col h=2/5"></div>
                                <div>Accueil</div>
                                <div>Présentation</div>
                                <div>Nos services</div>
                                <div>Collaborateurs</div>
                                <div>Contactez-nous</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-3/4 border-2 border-amber-900">0</div>
            </div>
        </div>
        );
    }

export default Home;