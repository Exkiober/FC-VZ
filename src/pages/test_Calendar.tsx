import React from "react";
import { Page } from "../components/ui/Page";
import { Calendar } from "../components/ui/Calendar";



const TestCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <Page className="flex flex-col items-center justify-center h-screen">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border bg-white border-gray-300"
            />
        </Page>
    )
}

export default TestCalendar;