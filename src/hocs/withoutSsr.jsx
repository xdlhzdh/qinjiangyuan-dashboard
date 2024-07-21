// hoc/withoutSsr.js
import dynamic from 'next/dynamic';

const withoutSsr = (WrappedComponent) => {
  return dynamic(() => Promise.resolve(WrappedComponent), { ssr: false });
};

export default withoutSsr;