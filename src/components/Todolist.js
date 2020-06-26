import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './layout/Header';
import { Content } from './layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from '../context';


export const Todolist = ({ darkModeDefault = false }) => {
    const [darkMode, setDarkMode] = useState(darkModeDefault);

    return (
        <SelectedProjectProvider>
            <ProjectsProvider>
                <main
                    data-testid="application"
                    className={darkMode ? 'darkmode' : undefined}
                >
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



