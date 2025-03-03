import React from 'react';

const Button: React.FC = () => {
  return (
    <button className="relative flex items-center justify-center min-w-[200px] h-[68px] p-5 rounded-[14px] text-[18px] font-semibold font-['Galano_Grotesque', 'Poppins', 'Montserrat', 'sans-serif'] text-black bg-gradient-to-t from-[#f7f8f7] to-[#e7e7e7] shadow-[0_0.5px_0.5px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.2),0_4px_5px_0px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_1px_2px_rgba(255,255,255,0.3),0_15px_30px_rgba(0,0,0,0.3),0_10px_3px_-3px_rgba(0,0,0,0.04)] active:scale-100 active:shadow-[0_0_1px_2px_rgba(255,255,255,0.3),0_10px_3px_-3px_rgba(0,0,0,0.2)]">
      <div className="absolute inset-[-2px_-3.5px] rounded-[14px] overflow-hidden opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-100">
        <div className="absolute inset-[-100%] bg-conic-gradient from-transparent via-white to-transparent animate-spin"></div>
      </div>

      <div className="state--default flex items-center justify-center pl-[29px] relative z-[2]">
        <div className="icon absolute left-0 top-0 bottom-0 m-auto transform scale-125 transition-all duration-300 ease-in-out">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <g style={{ filter: 'url(#shadow)' }}>
              <path
                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodOpacity="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
        <p className="flex items-center justify-center">
          {['G','e','t','S','t','a','r','t','e','d'].map((letter, index) => (
            <span 
              key={index} 
              style={{ '--i': index } as React.CSSProperties} 
              className="block opacity-0 animate-slide-down"
            >
              {letter}
            </span>
          ))}
        </p>
      </div>

      <style jsx global>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-0.5em);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease forwards;
          animation-delay: calc(0.05s * var(--i));
        }
      `}</style>
    </button>
  );
};

export default Button;