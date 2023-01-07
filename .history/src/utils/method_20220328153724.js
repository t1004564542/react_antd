export default function timeFormat(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return year + '-' + month + "-" + hour + ' ' + hour + ':' + minute + ':' + second
}