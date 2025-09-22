import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';

export default function Root({ children }) {
  const cms = React.useMemo(() => new TinaCMS({}), []);

  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}