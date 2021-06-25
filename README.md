# smarkio_test_ibm

![image](https://user-images.githubusercontent.com/62350674/123356441-1e6bc500-d53e-11eb-92c1-e2ff90882e74.png)

# necessidades para rodar a aplicação

1: criar login no IBM para conseguir uma chave e uma api.

2: ter instalado o mySql server e workbench.

3: adicionar um schema no workbench com o nome smarkio_test.

3: instalar o angular/cli, nodejs e o wampserver para rodar o banco e migration localmente.

4: crie um arquivo .env dentro da pasta "smarkio_test_api" e coloque os seus dados como no exemplo:

![image](https://user-images.githubusercontent.com/62350674/123447096-de452a80-d5af-11eb-914d-0aee9a40a101.png)

5: informe tambem estes dados dentro do arquivo "ormconfig.json" da pasta "smarkio_test_api"

6: Dentro do arquivo VoiceController.ts na pasta "smarkio_test_api" voce deve informar a sua própria "api-key".

 	/********************* INFORM YOUR KEY and URL here ****************/
        const API_KEY = 'sua api-key'
        const API_URL = "seu url

# BackEnd

7: abrir a pasta smarkio_test_api no terminal e rodar os seguintes comandos:
	
  	yarn;
	/*** O COMANDO TYPEORM DEVE SER RODADO QUANDO O SCHEMA DO WORKBENCH JA ESTEJA CRIADO, DESSA FORMA
	ELE IRA ADICIONAR AS TABELAS NECESSARIAS ***/
	yarn typeorm migration:run;
	yarn dev;
	
	
	/*** CASO OCORRA ERRO DE CORS ****/
  	yarn add @types/cors --save-dev;

![image](https://user-images.githubusercontent.com/62350674/123448071-e81b5d80-d5b0-11eb-86e4-f709621124b6.png)

 
# FrontEnd
 
8: abrir a pasta smarkio_test_front no terminal e rodar os seguintes comandos:
	
	npm i;
	ng s;

![image](https://user-images.githubusercontent.com/62350674/123447984-d0dc7000-d5b0-11eb-9cfa-8ac56b5262db.png)
