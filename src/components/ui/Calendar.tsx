import React from 'react';

interface CalendarProps {
    mode: 'single' | 'multiple';
    selected: Date | undefined;
    onSelect: (date: Date) => void;
    className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ mode, selected, onSelect, className }) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const daysInMonth = (date: Date) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    };

    const getDaysInPreviousMonth = (date: Date) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        return new Date(year, month, 0).getDate(); // Last day of the previous month
    };

    const handleDateClick = (day: number, monthOffset: number = 0) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);
        onSelect(newDate);
    };

    const renderDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const prevMonthDays = getDaysInPreviousMonth(currentDate);
        const today = new Date(); // Get today's date

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const isPrevMonthSelected = selected && selected.getDate() === prevMonthDays - firstDay + i + 1 && selected.getMonth() === currentDate.getMonth() - 1 && selected.getFullYear() === currentDate.getFullYear();
            days.push(
                <button
                    key={`prev-${i}`}
                    onClick={() => handleDateClick(prevMonthDays - firstDay + i + 1, -1)} // Previous month
                    className={`text-sm p-2 m-1 rounded-md text-gray-400 hover:cursor-pointer hover:bg-gray-200 ${isPrevMonthSelected ? 'bg-gray-200' : ''}`}
                >
                    {prevMonthDays - firstDay + i + 1}
                </button>
            );
        }

        // Render the actual days of the month
        for (let day = 1; day <= totalDays; day++) {
            const isSelected = selected && selected.getDate() === day && selected.getMonth() === currentDate.getMonth() && selected.getFullYear() === currentDate.getFullYear();
            const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
            days.push(
                <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`text-sm p-2 m-1 rounded-md hover:cursor-pointer ${isSelected ? 'bg-black text-white' : isToday ? 'bg-gray-300 text-black' : 'bg-white text-black hover:bg-gray-200'}`}
                >
                    {day}
                </button>
            );
        }

        // Add empty cells for days after the last day of the month
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
        const daysInNextMonth = 6 - lastDay; // Calculate how many days to show from the next month
        for (let i = 1; i <= daysInNextMonth; i++) {
            const isNextMonthSelected = selected && selected.getDate() === i && selected.getMonth() === currentDate.getMonth() + 1 && selected.getFullYear() === currentDate.getFullYear();
            days.push(
                <button
                    key={`next-${i}`}
                    onClick={() => handleDateClick(i, 1)} // Next month
                    className={`text-sm p-2 m-1 rounded-md text-gray-400 hover:cursor-pointer hover:bg-gray-200 ${isNextMonthSelected ? 'bg-gray-300' : ''}`}
                >
                    {i}
                </button>
            );
        }

        return days;
    };

    const changeMonth = (increment: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1);
        setCurrentDate(newDate);
    };

    return (
        <div className={`flex flex-col items-center justify-center ${className} w-fit h-fit`}>
            <div className="grid grid-cols-7 w-full p-1 my-2">
                <button onClick={() => changeMonth(-1)} className="col-span-1 text-sm text-gray-500 border border-gray-200 rounded-md p-2 ml-2 hover:cursor-pointer">{"<"}</button>
                <span className="col-span-5 self-center font-bold text-black">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
                <button onClick={() => changeMonth(1)} className="col-span-1 text-sm text-gray-500 border border-gray-200 rounded-md p-2 mr-2 hover:cursor-pointer">{">"}</button>
            </div>
            {/* Combined Day Labels and Days */}
            <div className="grid grid-cols-7 p-1">
                <span className="col-span-1 text-sm text-gray-500">Su</span>
                <span className="col-span-1 text-sm text-gray-500">Mo</span>
                <span className="col-span-1 text-sm text-gray-500">Tu</span>
                <span className="col-span-1 text-sm text-gray-500">We</span>
                <span className="col-span-1 text-sm text-gray-500">Th</span>
                <span className="col-span-1 text-sm text-gray-500">Fr</span>
                <span className="col-span-1 text-sm text-gray-500">Sa</span>
                {renderDays()}
            </div>
        </div>
    );
};

export { Calendar };