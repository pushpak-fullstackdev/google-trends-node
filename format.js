const moment = require('moment');
const formatData = data => data.map((
    // data
    {value, formattedAxisTime, time}
    ) => {
    // return data;
    return {
        value: value[0],
        formattedTime: moment(formattedAxisTime).toDate(),
        time
    }
});
module.exports = {
    formatData
}