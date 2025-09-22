// src/theme/Root.js
import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';

console.log("Root.js file is loading"); // Add this line

export default function Root({ children }) {
  const cms = React.useMemo(() => new TinaCMS({}), []);
  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}
    