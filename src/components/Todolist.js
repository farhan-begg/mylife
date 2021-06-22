import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from '../context';


export const Todolist = () => {

    return (
        <SelectedProjectProvider>
            <ProjectsProvider>
                <main data-testid="application">
                    <Content />
                </main>
            </ProjectsProvider>
        </SelectedProjectProvider>
    );
};

Todolist.propTypes = {
    darkModeDefault: PropTypes.bool,
};

export default Todolist;



