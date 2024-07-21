// hoc/withSsrAndCsr.tsx
import React, { useEffect, useState } from 'react';

const withSsrAndCsr = (SSRComponent, CSRComponent) => {
    const WithSSRComponent = (props) => {
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
