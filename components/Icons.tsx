import React from 'react';

interface IconProps {
  name: 'send' | 'check' | 'double-check' | 'video-call' | 'phone' | 'more-vert';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  // Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const icons: { [key in IconProps['name']]: React.ReactElement } = {
    send: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em">
        <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
      </svg>
    ),
    'double-check': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
        <path d="M18 6L7 17l-5-5" />
        <path d="M22 6l-11 11-5-5" />
      </svg>
    ),
    'video-call': (
        <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
        </svg>
    ),
    phone: (
        <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
    ),
    'more-vert': (
        <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    ),
  };
  return <div className={className}>{icons[name]}</div>;
};
