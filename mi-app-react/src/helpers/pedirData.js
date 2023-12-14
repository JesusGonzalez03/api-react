import data from "../data/data.json"

export const pedirData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const pedirPdtoPorId = (id) => {
    return new Promise((resolve, reject) => {

        const pdto = data.find((el) => el.id === id);

        if (pdto) {
            resolve(pdto);
        }else {
            reject({
                error: "No se encontro el curso"
            })
        }
    })
} 