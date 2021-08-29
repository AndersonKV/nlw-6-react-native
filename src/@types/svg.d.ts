declare module "*.svg" {
    import React from 'react';
    import { svg, SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
};