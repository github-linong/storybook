import React from 'react';

import PropTypes from 'prop-types';
import {Button} from "antd";


/** PermissionButton */
export const PermissionButton = ({
                                     primary = false,
                                     backgroundColor = null,
                                     size = 'medium',
                                     label,
                                     ...props
                                 }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <Button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={backgroundColor && {backgroundColor}}
            {...props}
        >
            {label}
        </Button>
    );
};

PermissionButton.propTypes = {
    permissions: PropTypes.array,
    tooltipProps: {
        title: PropTypes.string,
    },
    /** Is this the principal call to action on the page? */
    primary: PropTypes.bool,
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    label: PropTypes.string.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};
