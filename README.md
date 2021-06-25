# smarkio_test_ibm

![image](https://user-images.githubusercontent.com/62350674/123356441-1e6bc500-d53e-11eb-92c1-e2ff90882e74.png)

#necessidades para rodar a aplicação

1: criar login no IBM para conseguir uma chave e uma api.

2: ter instalado o mySql server e workbench.

3: adicionar um schema no workbench com o nome smarkio_test.

3: instalar o angular/cli, nodejs e o wampserver para rodar o banco e migration localmente.

4: criei um arquivo .env dentro da pasta "smarkio_test_api" e coloque os seus dados como no exemplo:

![image](https://user-images.githubusercontent.com/62350674/123427368-ea72bd00-d59a-11eb-9e16-e1cb6dc46a18.png)

5: Dentro do arquivo VoiceController.ts na pasta "smarkio_test_api" voce deve informar a sua própria "api-key".

 	/********************* INFORM YOUR KEY and URL here ****************/
        const API_KEY = 'sua api-key'
        const API_URL = "seu url

6: abrir a pasta smarkio_test_api no terminal e rodar os seguintes comandos:
	
  	yarn;
	/*** O COMANDO TYPEORM DEVE SER RODADO QUANDO O SCHEMA DO WORKBENCH JA ESTEJA CRIADO, DESSA FORMA
	ELE IRA ADICIONAR AS TABELAS NECESSARIAS ***/
	yarn typeorm migration:run;
	yarn dev;
	
	
	/*** CASO OCORRA ERRO DE CORS ****/
  	yarn add @types/cors --save-dev;
	

  
7: abrir a pasta smarkio_test_front no terminal e rodar os seguintes comandos:
	
	npm i;
	ng s;



