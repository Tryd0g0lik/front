import React from 'react';
import { HeadFC } from '../parts/Header';
import { FooterFC } from '../parts/Footer';

export function PagesFC(): React.JSX.Element {
  return (<>
    <header className="header">
      < HeadFC />
    </header>
    <div className="content">

    </div>

    <div className="aside">
    </div>
    <footer className="footer">
      < FooterFC />
    </footer>
  </>);
}
