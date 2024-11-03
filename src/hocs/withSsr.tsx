// hoc/withSsr.tsx
import React, { ComponentType } from 'react';

// use this hoc to fetch data on the server side
const withSsr = <P extends {}>(WrappedComponent: ComponentType<P>) => {
    const WithSsrComponent = (props: P) => {
        return <WrappedComponent {...props} />;
    };

    WithSsrComponent.getServerSideProps = async () => {
        const data = await fetch('https://api.example.com/data').then(res => res.json());
        return { props: { data } };
    };

    return WithSsrComponent;
};

export default withSsr;
