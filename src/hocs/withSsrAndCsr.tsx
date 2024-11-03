// hoc/withSsrAndCsr.tsx
import React, { useEffect, useState } from 'react';

const withSsrAndCsr = <P extends {}>(SSRComponent: React.ComponentType<P>, CSRComponent: React.ComponentType<P>) => {
    const WithSSRComponent = (props: P) => {
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

        if (isClient) {
            return <CSRComponent {...props} />;
        }

        return <SSRComponent {...props} />;
    };

    return WithSSRComponent;
};

export default withSsrAndCsr;
