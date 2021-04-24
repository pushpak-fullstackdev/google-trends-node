const formatData = data => data.map(({value, formattedTime}) => {
    return {
        value: value[0],
        formattedTime
    }
});
module.exports = {
    formatData
}