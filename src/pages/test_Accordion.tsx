import { Page } from "../components/ui/Page"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion"
import { FaPlus, FaMinus } from 'react-icons/fa';


const Test_Accordion = () => {


    return (
        <Page className="flex flex-col items-center justify-center h-screen">
            <Accordion>
                <AccordionItem>
                    <AccordionTrigger openIcon={<FaMinus />} closedIcon={<FaPlus />} >
                        Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger openIcon={<FaMinus />} closedIcon={<FaPlus />} >
                        Is it styled?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that match the other components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger openIcon={<FaMinus />} closedIcon={<FaPlus />} >
                        Is it animated?
                    </AccordionTrigger>
                    <AccordionContent> 
                        Yes. It&apos;s animated by default, but you can disable it if you prefer. 
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Page>
    )
}

export default Test_Accordion;