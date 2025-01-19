"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for client-side navigation

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Ensure it's from 'next/navigation'

  const handleSnakeGame = () => {
    setIsOpen(false); // Close modal before navigation
    router.push("/snakegame"); // Navigate to the Snake Game route
  };
  const handleTicTAcToeGame = () => {
    setIsOpen(false); // Close modal before navigation
    router.push("/tictactoe"); // Navigate to the Snake Game route
  };
  const handleTypeSpeedTestGame = () => {
    setIsOpen(false); // Close modal before navigation
    router.push("/typingspeed"); // Navigate to the Snake Game route
  };

  return (
    <>
      {/* Trigger Buttons */}
      <button
        type="button"
        className="text-15px font-bold sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        Games
      </button>
      <button
        type="button"
        className="text-15px hidden font-bold sm:inline-block"
        onClick={() => setIsOpen(true)}
      >
        Games
      </button>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
          aria-labelledby="auth-modal-title"
          aria-describedby="auth-modal-description"
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl md:p-8">
                <Dialog.Title
                  id="auth-modal-title"
                  className="text-center text-lg font-bold text-gray-700"
                >
                  Games
                </Dialog.Title>
                <Dialog.Description
                  id="auth-modal-description"
                  className="mt-2 text-center text-sm text-gray-500"
                >
                  Choose the game you want to play
                </Dialog.Description>

                {/* Game Buttons */}
                {/* SNAKE GAME */}
                <div className="mt-6 flex flex-col gap-4">
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-400 disabled:opacity-50"
                    onClick={handleSnakeGame}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="size-5"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.1 0 5.9 1.2 8.1 3.3l6.1-6.1C34.1 3.5 29.3 1.5 24 1.5 14.8 1.5 7.2 7.2 4.3 15.1l7.7 6C13.3 15.1 18.2 9.5 24 9.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M46.4 24.5c0-1.7-.2-3.4-.5-5h-22v9h12.7c-.6 3.2-2.5 5.9-5.2 7.8l7.8 6C43.1 38.1 46.4 31.7 46.4 24.5z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M11.9 28.9c-1.1-3.2-1.1-6.8 0-10l-7.7-6c-2.7 5.3-2.7 11.7 0 17.1l7.7-6z"
                      />
                      <path
                        fill="#4285F4"
                        d="M24 46.5c5.4 0 10.4-1.8 14.3-4.9l-7.8-6c-2.1 1.4-4.7 2.2-7.5 2.2-5.8 0-10.7-3.9-12.4-9.1l-7.7 6C7.2 40.8 14.8 46.5 24 46.5z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    Snake Game
                  </button>
                </div>

                {/* Tic tac toe GAME */}
                <div className="mt-6 flex flex-col gap-4">
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-400 disabled:opacity-50"
                    onClick={handleTicTAcToeGame}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="size-5"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.1 0 5.9 1.2 8.1 3.3l6.1-6.1C34.1 3.5 29.3 1.5 24 1.5 14.8 1.5 7.2 7.2 4.3 15.1l7.7 6C13.3 15.1 18.2 9.5 24 9.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M46.4 24.5c0-1.7-.2-3.4-.5-5h-22v9h12.7c-.6 3.2-2.5 5.9-5.2 7.8l7.8 6C43.1 38.1 46.4 31.7 46.4 24.5z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M11.9 28.9c-1.1-3.2-1.1-6.8 0-10l-7.7-6c-2.7 5.3-2.7 11.7 0 17.1l7.7-6z"
                      />
                      <path
                        fill="#4285F4"
                        d="M24 46.5c5.4 0 10.4-1.8 14.3-4.9l-7.8-6c-2.1 1.4-4.7 2.2-7.5 2.2-5.8 0-10.7-3.9-12.4-9.1l-7.7 6C7.2 40.8 14.8 46.5 24 46.5z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    Tic Tac Toe
                  </button>
                </div>

                {/*                     Type Speed test GAME */}
                <div className="mt-6 flex flex-col gap-4">
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-400 disabled:opacity-50"
                    onClick={handleTypeSpeedTestGame}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="size-5"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.1 0 5.9 1.2 8.1 3.3l6.1-6.1C34.1 3.5 29.3 1.5 24 1.5 14.8 1.5 7.2 7.2 4.3 15.1l7.7 6C13.3 15.1 18.2 9.5 24 9.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M46.4 24.5c0-1.7-.2-3.4-.5-5h-22v9h12.7c-.6 3.2-2.5 5.9-5.2 7.8l7.8 6C43.1 38.1 46.4 31.7 46.4 24.5z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M11.9 28.9c-1.1-3.2-1.1-6.8 0-10l-7.7-6c-2.7 5.3-2.7 11.7 0 17.1l7.7-6z"
                      />
                      <path
                        fill="#4285F4"
                        d="M24 46.5c5.4 0 10.4-1.8 14.3-4.9l-7.8-6c-2.1 1.4-4.7 2.2-7.5 2.2-5.8 0-10.7-3.9-12.4-9.1l-7.7 6C7.2 40.8 14.8 46.5 24 46.5z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    Type Speed test
                  </button>
                </div>
                {/* Close Button */}
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AuthModal;
