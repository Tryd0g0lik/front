import React from 'react';
import { HeadFC } from '../parts/Header';

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
    </footer>
  </>);
}
