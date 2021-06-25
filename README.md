# smarkio_test_ibm


#necessidades para rodar a aplicação

1: criar login no IBM para conseguir uma chave e uma api.

2: ter instalado o mySql server e workbench.

3: adicionar um schema no workbench com o nome smarkio_test.

3: instalar o angular/cli e nodejs.

4: abrir a pasta smarkio_test_api no terminal e rodar os seguintes comandos:
	
  	yarn;
	yarn typeorm migration:run;
	yarn add @types/cors --save-dev;
	yarn dev;
	
  /* caso ocorra erro de cors */
  
5: abrir a pasta smarkio_test_front no terminal e rodar os seguintes comandos:
	npm i;
	ng s;

6: Dentro do arquivo VoiceController.ts na pasta "smarkio_test_api" voce deve informar a sua própria "api-key".

 	/********************* INFORM YOUR KEY and URL here ****************/
        const API_KEY = 'sua api-key'
        const API_URL = "seu url"

7: abrir a pasta smarkio_test_front no terminal e rodar os seguintes comandos:
	npm i;
	ng s;
