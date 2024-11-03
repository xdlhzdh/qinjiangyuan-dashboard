// hoc/withoutSsr.tsx
import dynamic from 'next/dynamic';

import { ComponentType } from 'react';

const withoutSsr = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  return dynamic(() => Promise.resolve(WrappedComponent), { ssr: false });
};

export default withoutSsr;
