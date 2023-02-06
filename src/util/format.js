
const generateHexCol = () => {
    let R = Math.floor((Math.random() * 127) + 127);
    let G = Math.floor((Math.random() * 127) + 127);
    let B = Math.floor((Math.random() * 127) + 127);

    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`;      
}

export const sortIntoCategories = (data) => {
    const copydata = [...data];
    const categories = [];
    for (let i = 1; i < 12; i++)
    {
        let sector = copydata.filter((item) => {
            return item.sector_id === i.toString();
        })
        categories.push(sector); 
    }
    return categories;
}

export const convert2DArrToObject = (arr) => {
    let retVal = [];
    const copyarr = [...arr];
    copyarr.forEach((sector) => {
        retVal.push({
            title: sector[0].name,
            value: Math.round(sector.length / copyarr.length * 100),
            color: generateHexCol()
        })
    })
    
    return retVal;
}


