import React from 'react';

interface SEOProps {
    title: string;
    description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    return (
        <div>
            <title>{title}</title>
            <meta name="description" content={description} />
        </div>
    );
};

export default SEO;
