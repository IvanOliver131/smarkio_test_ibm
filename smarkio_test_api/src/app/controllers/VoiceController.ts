import { Request, Response } from 'express';

class VoiceController {
    async talk(req: Request, res: Response) {
        console.log(req.query)

        /************ INFORM YOUR API_KEY AND YOU API_URL HERE **************/
        const API_KEY = '51R3zTmYwTyYJqWSAi4NaeQSDJvgt7x6BkfNg1PCUR_9'
        const API_URL = "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/3477115f-fab2-4f8a-95b2-e9e09e8ceed4"

        const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
        const { IamAuthenticator } = require('ibm-watson/auth');

        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: API_KEY,
            }),
            serviceUrl: API_URL,
        });

        const message = req.query.comment
        const synthesizeParams = {
            text: message,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaVoice',
        }

        textToSpeech
            .synthesize(synthesizeParams)
            .then((res: any) => {
                return textToSpeech.repairWavHeaderStream(res.result)
            })
            .then((buffer: any) => {
                //return res.json(buffer)
                return res.send(buffer)
            })
    }
}

export default new VoiceController();
