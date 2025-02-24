import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: children.props.className + " text-4xl md:text-3xl lg:text-4xl font-semibold mb-8 max-w-2xl"
    });
};

export default SectionTitle;
