export function turnToPersianDigits(input: number | string) {
    const inputs = '' + input;
    return inputs.replace(/0/g, '۰').replace(/1/g, '۱').replace(/2/g, '۲').replace(/3/g, '۳').replace(/4/g, '۴').replace(/5/g, '۵').replace(/6/g, '۶').replace(/7/g, '۷').replace(/8/g, '۸').replace(/9/g, '۹').replace(/٤/g, '۴').replace(/٥/g, '۵').replace(/٦/g, '۶');

}

export function addCommas(input: number | string) {
    const inputs = '' + input;
    return inputs.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}