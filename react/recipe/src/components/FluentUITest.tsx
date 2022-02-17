import React from 'react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

//import { Icon } from '@fluentui/react/lib/Icon';
import { IconButton } from '@fluentui/react/lib/Button';
import { Icon } from '@fluentui/react';
import { getFileTypeIconProps, FileIconType, initializeFileTypeIcons } from '@fluentui/react-file-type-icons';
initializeFileTypeIcons(/* optional base url */);


initializeIcons();

export default function FluentUITest() {
    return (
        <div>
            <h1>Fluent UI Test library</h1>
            <Icon iconName="CompassNW" />
            <IconButton iconProps={{ iconName: 'AdminALogo32' }} title="Add" ariaLabel="Add" />
            <Icon {...getFileTypeIconProps({ extension: 'docx', size: 48, imageFileType: 'png' })} />
            <Icon {...getFileTypeIconProps({ type: FileIconType.folder, size: 48, imageFileType: 'svg' })} />


        </div>
    );
}

