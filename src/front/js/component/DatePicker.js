import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const ReactdatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    return(
        <div>
            <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            filterDate={date => date.getDay() != 5}
            showYearDropdown
            scrollableMonthYearDropdown
            
            >   
            </DatePicker>
        </div>
    )
};