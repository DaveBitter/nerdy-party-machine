// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Helpers
import parsePackageMeta from './helpers/parsePackageMeta';

// Components

// Component
const PackageMetadata = ({ pckg }) => {
    const { name, version, license, publisher, links, description, downloads } = parsePackageMeta(pckg);

    return (
        <div className='package-metadata'>
            {pckg.exists ? <>
                <h2>{name}</h2>
                <ul className='package-metadata__meta'>
                    {version && <li>v.{version}</li>}
                    {license && <li>{license}</li>}
                    {publisher && <li>{publisher}</li>}
                    {downloads && <li>{downloads}</li>}
                </ul>
                <p>{description}</p>
                <ul className='package-metadata__links'>
                    {Object.keys(links).map(key => <li key={key}>
                        <a href={links[key]} target='_blank' rel='noopener noreferrer'>{key}</a>
                    </li>)}
                </ul>
            </> :
                <h2 className='package-metadata__message'>Package does not exist!</h2>}
        </div>
    );
};

// Default props
PackageMetadata.defaultProps = {
};

const { object } = PropTypes;

PackageMetadata.propTypes = {
    pckg: object
};


export default PackageMetadata;
