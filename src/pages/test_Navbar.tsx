import { useState } from 'react';

import Navbar from '../components/Navbar';
import { Page } from '../components/ui/Page';

function Test_Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => setIsOpen(!isOpen); // Toggle function

    return (
        <Page>
            <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        </Page>
    );
}

export default Test_Navbar;