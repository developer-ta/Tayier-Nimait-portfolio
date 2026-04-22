
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'logo':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6C12 6 15 8 15 12C15 16 12 18 12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6C12 6 9 8 9 12C9 16 12 18 12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M15 12H19M5 12H9M12 15V19M12 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'menu':
        return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        );
    case 'close':
        return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.881 0-2.6.51-.51 1.258-.656 1.895-.436V8.29c-.637.22-1.385.074-1.895-.436-.516-.516-.658-1.258-.438-1.9L7.65 3.295 2.625 8.318c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.188 0l8.256-8.256c.601-.601.601-1.582-.003-2.187z"></path>
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path fill="currentColor" d="M14.25.75l-.16.18V4.5h-1.58l-.19-.19H6.18l-.18.19v2.53l.18.18h3.35v.94H4.31L1.5 10.96v6.28l2.81 2.81h4.97l.19-.18v-3.57h1.58l.19.19h6.14l.18-.19v-2.53l-.18-.18h-3.35v-.94h5.24l2.81-2.81V3.56L19.22.75h-4.97zm-5.72 2.2c.44 0 .79.36.79.79 0 .44-.36.79-.79.79-.44 0-.79-.36-.79-.79 0-.44.35-.79.79-.79z"/>
           <path fill="currentColor" opacity="0.8" d="M19.69 8.75v6.28l-2.81 2.81h-4.97l-.19.18v3.57h-1.58l-.19-.19h-6.14l-.18.19v2.53l.18.18h3.35v.94h-5.24l-2.81-2.81v-7.41l2.81-2.81h4.97l.19.18v3.57h1.58l.19-.19h6.14l.18.19v2.53l-.18.18h3.35v.94h-5.24l-2.81-2.81v-6.28zm-5.72 10.07c-.44 0-.79-.36-.79-.79 0-.44.36-.79.79-.79.44 0 .79.36.79.79 0 .44-.35-.79-.79-.79z"/>
        </svg>
      );
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L5 12L10 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 17L19 12L14 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" transform="rotate(15, 12, 12)"/>
        </svg>
      );
    case 'ai':
    case 'brain':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,2C8.13,2,5,5.13,5,9c0,2.38,1.19,4.47,3,5.74V17c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2.26 c1.81-1.27,3-3.36,3-5.74C19,5.13,15.87,2,12,2z M13,16h-2v-1h2V16z M14.57,13.14L14,13.54V15h-4v-1.46l-0.57-0.4 c-1.5-1.05-2.43-2.77-2.43-4.64C7,5.97,9.25,3.5,12,3.5s5,2.47,5,5C17,10.37,16.07,12.09,14.57,13.14z"/>
          <path d="M12 5.5c-2.48 0-4.5 2.02-4.5 4.5 0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5c0-1.93 1.57-3.5 3.5-3.5 0.28 0 0.5-0.22 0.5-0.5s-0.22-0.5-0.5-0.5z" opacity="0.5"/>
        </svg>
      );
    case 'deeplearning':
    case 'robot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,2c-4.97,0-9,4.03-9,9v7c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3v-7C21,6.03,16.97,2,12,2z M12,4c3.86,0,7,3.14,7,7v1h-1v-1 c0-3.31-2.69-6-6-6S6,7.69,6,11v1H5v-1C5,7.14,8.14,4,12,4z M18,18c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4h12V18z M18,12H6v-1 c0-3.31,2.69-6,6-6s6,2.69,6,6V12z"/>
          <rect x="8" y="14" width="2" height="2" rx="1"/>
          <rect x="14" y="14" width="2" height="2" rx="1"/>
          <path d="M10,17h4c0.55,0,1-0.45,1-1s-0.45-1-1-1h-4c-0.55,0-1,0.45-1,1S9.45,17,10,17z" opacity="0.3"/>
        </svg>
      );
    case 'csharp':
      return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#512BD4" d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z"/>
          <path fill="#FFFFFF" d="M16 8.5h-1v-1h-1.5v1H12v1.5h1.5v1H12v1.5h1.5v1h-1.5v1.5h1.5v1h1v-1h1.5v-1.5H16v-1h1v-1.5h-1v-1h1.5v-1.5H16v-1zm-4.5 9c-3 0-4.5-2-4.5-5.5s1.5-5.5 4.5-5.5c1.5 0 2.5.5 3 1l-1 1.5c-.5-.5-1-.5-2-.5-1.5 0-2.5 1.5-2.5 3.5S10 15 11.5 15c1 0 1.5 0 2-.5l1 1.5c-.5.5-1.5 1.5-3 1.5z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13,7h-2.5V4.5c0-0.28-0.22-0.5-0.5-0.5h-2c-0.28,0-0.5,0.22-0.5,0.5V7H5c-0.28,0-0.5,0.22-0.5,0.5v2c0,0.28,0.22,0.5,0.5,0.5h2.5 v2.5c0,0.28,0.22,0.5,0.5,0.5h2c0.28,0,0.5-0.22,0.5-0.5V10H13c0.28,0,0.5-0.22,0.5-0.5v-2C13.5,7.22,13.28,7,13,7z" opacity=".3"/>
            <path d="M22.42,12.39c-0.5-0.21-3.32-1.35-3.32-1.35c-0.27-0.12-0.57-0.1-0.81,0.06c-0.42,0.27-1.12,0.68-1.42,0.85 L16.8,11.5c0.68-0.28,1.75-0.78,1.75-0.78c0.28-0.11,0.41-0.44,0.3-0.72c-0.11-0.28-0.43-0.4-0.71-0.29l-2.09,0.9l-0.54-0.22 c0.67-1.07,1.82-1.84,3.15-2.01c0.16-0.02,0.29-0.13,0.33-0.29c0.05-0.16-0.02-0.33-0.16-0.43c-2.45-1.72-5.75-1.39-7.85,0.7 c-0.65,0.65-1.1,1.44-1.32,2.3c-0.36-0.14-0.72-0.28-1.07-0.43c-0.01-0.21-0.04-0.43-0.08-0.64C8.42,9.39,8.23,9.22,8.01,9.22H6.42 V7.63c0-0.22-0.17-0.4-0.39-0.4h-2c-0.22,0-0.4,0.18-0.4,0.4v1.59H2.03c-0.22,0-0.39,0.17-0.39,0.39v2c0,0.22,0.18,0.4,0.4,0.4h1.59 v2.46c-1.4,0.74-2.18,2.33-1.84,3.9c0.32,1.47,1.52,2.6,3,2.83c2.09,0.33,4-1.04,4.42-3.03l5.07,2c0.2,0.08,0.43,0.01,0.56-0.17 c0.13-0.18,0.1-0.42-0.06-0.56c-0.34-0.31-0.95-0.91-1.28-1.26c0.5-0.22,0.98-0.49,1.42-0.8c0.19,0.31,0.45,0.57,0.77,0.77 c0.37,0.23,0.8,0.35,1.22,0.35c0.67,0,1.31-0.28,1.76-0.78C23.09,16.03,23.19,13.79,22.42,12.39z"/>
        </svg>
      );
    case 'settings':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      );
    case 'neuro':
       return (
         <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
           <circle cx="12" cy="12" r="3" stroke="currentColor"></circle>
           <path d="M12 9V4M12 20v-5M9 12H4M20 12h-5" strokeLinecap="round"></path>
         </svg>
       );
    case 'ui':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.12a2.25 2.25 0 002.15 2.88h12.15a2.25 2.25 0 002.15-2.88l-2.412-7.744A2.25 2.25 0 0015.088 3.75H13.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 17.25h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'chart':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'lock':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="11" width="14" height="10" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0110 0v4"></path>
        </svg>
      );
    case 'dna':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.81 18.06l-1.01-1.01a6.16 6.16 0 001.76-4.32 6.18 6.18 0 00-1.81-4.37l1.01-1.01a7.58 7.58 0 012.25 5.38 7.55 7.55 0 01-2.2 5.33M6.19 5.94l1.01 1.01a6.16 6.16 0 00-1.76 4.32 6.18 6.18 0 001.81 4.37l-1.01 1.01a7.58 7.58 0 01-2.25-5.38 7.55 7.55 0 012.2-5.33M12 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4.35-6.65l-1.01 1.01a4.11 4.11 0 00-1.17-2.88l1.01-1.01a5.5 5.5 0 011.57 3.88m-8.7 8.3l1.01-1.01a4.11 4.11 0 001.17 2.88l-1.01 1.01a5.5 5.5 0 01-1.57-3.88M12 6.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m0 12c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5"></path>
        </svg>
      );
    case 'beaker':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3h6M10 3v13.5a3.5 3.5 0 007 0V3M10 6h4M10 9h4"></path>
        </svg>
      );
    case 'linkedin':
        return (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
        );
    case 'github':
        return (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
        );
    case 'twitter':
        return (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
        );
    case 'moon':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'sun':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        );
    case 'vision':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-4.44a1.012 1.012 0 011.428 0l4.44 4.43a1.012 1.012 0 010 .639l-4.44 4.43a1.012 1.012 0 01-1.428 0l-4.43-4.44z" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12.75 9l4.43 4.44a1.012 1.012 0 010 .639l-4.43 4.44a1.012 1.012 0 01-1.428 0l-4.44-4.43a1.012 1.012 0 010-.639l4.44-4.43a1.012 1.012 0 011.428 0z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'stars':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'terminal':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    default:
      return null;
  }
};
