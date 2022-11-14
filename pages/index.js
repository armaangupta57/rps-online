import React, { useState } from "react";
import Image from 'next/image';

export default function Home() {
    const [computerScore, setComputerScore] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [fontColor, setFontColor] = useState("text-black");
    const [alertText, setAlertText] = useState("Computer is waiting for your input...")

    const computerWon = (computerMove) => {
        setComputerScore(computerScore + 1);
        setFontColor("text-red-600");
        setAlertText("Computer picked " + computerMove + ", you lost :(");
    }

    const playerWon = (computerMove) => {
        setPlayerScore(playerScore + 1);
        setFontColor("text-green-600");
        setAlertText("Computer picked " + computerMove + ", you won :)");
    }

    const recordTie = (move) => {
        setFontColor("text-black");
        setAlertText("Both you and the computer picked " + move + ", it's a tie :|");
    }

    const handlePlayerMove = (e) => {
        const playerMove = e.target.id;
        const computerNum = Math.floor(Math.random() * 3);
        let computerChoice = "rock";

        if (computerNum === 1) computerChoice = "paper";
        else if (computerNum === 2) computerChoice = "scissors";

        if (playerMove === "rock" && computerChoice === "paper") computerWon(computerChoice);
        else if (playerMove === "rock" && computerChoice === "scissors") playerWon(computerChoice);
        else if (playerMove === "paper" && computerChoice === "rock") playerWon(computerChoice);
        else if (playerMove === "paper" && computerChoice === "scissors") computerWon(computerChoice);
        else if (playerMove === "scissors" && computerChoice === "rock") computerWon(computerChoice);
        else if (playerMove === "scissors" && computerChoice === "papper") playerWon(computerChoice);
        else recordTie(playerMove);

    }

    const restartMatch = () => {
        setComputerScore(0);
        setPlayerScore(0);
        setFontColor("text-black");
        setAlertText("Computer is waiting for your input...");
    }

    return (
        <div>
            <div className={"pt-36 pb-12"}>
                <div className={"flex items-center justify-center pb-12"}>
                    <Image className={"object-center"} src={"/Kreative_Logo_v3.png"} alt={""} width={120} height={50}/>
                </div>
                <h1 className={"font-sans font-bold text-6xl text-black text-center pb-2"}>
                    Rock Paper Scissors Online
                </h1>
                <p className={"font-sans text-2xl text-slate-600 text-center"}>
                    Test your luck in RPS as you battle the computer head on.
                </p>
            </div>
            <div className={"flex flex-row"}>
                <div className={"basis-1/2 pr-6"}>
                    <h2 className={"text-right font-mono font-bold text-xl"}>COMPUTER: {computerScore}</h2>
                </div>
                <div className={"basis-1/2 pl-6"}>
                    <h2 className={"text-left font-mono font-bold text-xl"}>PLAYER: {playerScore}</h2>
                </div>
            </div>
            <div className={"container pt-16"}>
                <div className={"flex flex-row"}>
                    <div className={"basis-1/3 flex justify-end"}>
                        <Image
                            id={"rock"}
                            className={"object-right zoom"}
                            src={"/stone.png"}
                            alt={""}
                            width={100}
                            height={100}
                            onClick={handlePlayerMove}
                        />
                    </div>
                    <div className={"basis-1/3 flex items-center justify-center"}>
                        <Image
                            id={"paper"}
                            className={"object-center zoom"}
                            src={"/note.png"}
                            alt={""}
                            width={100}
                            height={100}
                            onClick={handlePlayerMove}
                        />
                    </div>
                    <div className={"basis-1/3 flex justify-start"}>
                        <Image
                            id={"scissors"}
                            className={"object-left zoom"}
                            src={"/scissors.png"}
                            alt={""}
                            width={100}
                            height={100}
                            onClick={handlePlayerMove}
                        />
                    </div>
                </div>
            </div>
            <p className={"font-bold font-mono text-lg text-center pt-14 " + fontColor}>{alertText}</p>
            <div className={"flex flex-col items-center pt-10"}>
                <button
                    type="button"
                    className="shrink text-white font-mono bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={restartMatch}
                >
                    RESTART MATCH
                </button>
            </div>
        </div>
      )
}
