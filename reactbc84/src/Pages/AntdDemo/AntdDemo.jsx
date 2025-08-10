import React from 'react';
import { DatePicker, Rate, Space } from 'antd';
import dayjs from 'dayjs';
import TableAntDemo from './TableAntDemo';
import TableExtent from './TableExtent';


const { RangePicker } = DatePicker;

const AntdDemo = () => {


    return (
        <div className='container'>
            <h1>Antd Demo</h1>
            <Rate allowHalf defaultValue={2.5} />
            <RangePicker allowClear={true} onChange={(date, dateString) => {
                console.log('Start:', date[0].format('DD/MM/YYYY'));
                console.log('End:', date[1].format('DD/MM/YYYY'));
                console.log(dateString)
                // let dstart = moment(dateString[0].format('DD/MM/YYYY')) - Có thể dùng moment thay vì dayjs

            }} />
            <TableAntDemo />
            <TableExtent />

        </div>

    )
}

export default AntdDemo