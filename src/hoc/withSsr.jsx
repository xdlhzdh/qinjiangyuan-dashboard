// hoc/withSsr.js
import React from 'react';

const withSsr = (WrappedComponent) => {
    // 返回一个新的组件
    const WithSSRComponent = (props) => {
        return <WrappedComponent {...props} />;
    };

    // 提供一个方法来获取服务器端数据
    WithSSRComponent.getServerSideProps = async (context) => {
        // 如果没有任何参数传递，也不需要调用额外的函数
        return { props: {} };
    };

    return WithSSRComponent;
};


export default withSsr;
