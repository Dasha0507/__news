import React from 'react';
import ContentLoader from 'react-content-loader';
 
function NewsLoadingCard() {
    return (
            <ContentLoader 
            speed={5}
            width={1176}
            height={778}
            viewBox="0 0 1176 778"
            backgroundColor="#dfdfdd"
            foregroundColor="#e8e8e8"
          >
            <rect x="395" y="20" rx="0" ry="0" width="385" height="36" /> 
            <rect x="0" y="90" rx="0" ry="0" width="1176" height="16" /> 
            <rect x="0" y="117" rx="0" ry="0" width="1176" height="16" /> 
            <rect x="0" y="142" rx="0" ry="0" width="1176" height="16" /> 
            <rect x="0" y="168" rx="0" ry="0" width="1176" height="16" /> 
            <rect x="0" y="195" rx="0" ry="0" width="1176" height="16" /> 
            <rect x="0" y="221" rx="0" ry="0" width="1176" height="16" /> 
            <rect x="2" y="279" rx="0" ry="0" width="450" height="16" /> 
            <rect x="313" y="327" rx="0" ry="0" width="550" height="420" />
          </ContentLoader>
    )
}

export default NewsLoadingCard
