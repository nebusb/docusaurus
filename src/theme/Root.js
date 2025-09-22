// src/theme/Root.js
import React from 'react';
import { TinaProvider, TinaCMS, GitClient } from 'tinacms';

export default function Root({ children }) {
  const cms = React.useMemo(
    () =>
      new TinaCMS({
        apis: {
          git: new GitClient('/___tina'),
        },
        // Pass other configuration options here
      }),
    [],
  );

  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}
