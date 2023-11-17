import * as https from "https";

const axios = require('axios');

export const getMananciais = async (req: any, res: any) => {
    try{
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        const dataHojeFormatada = new Date().toISOString().split('T')[0];
        const response = await axios.get(`http://mananciais.sabesp.com.br/api/Mananciais/ResumoSistemas/${dataHojeFormatada}`, {httpsAgent});
        res.status(200).send(response.data.ReturnObj.sistemas);
    }catch(e){
        res.status(500).send({message: `Error in ${e}`})
    }
}