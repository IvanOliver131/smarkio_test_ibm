# smarkio_test_ibm

![image](https://user-images.githubusercontent.com/62350674/123356441-1e6bc500-d53e-11eb-92c1-e2ff90882e74.png)

# necessidades para rodar a aplicação

1: Criar login no IBM - watson text to speech para conseguir sua própria chave e sua url.

2: Ter instalado o mySql server e workbench.

https://dev.mysql.com/downloads/workbench/

3: Instalar o angular/cli, nodejs, yarn e o wampserver para rodar o banco e migration localmente.

https://classic.yarnpkg.com/en/docs/install/#windows-stable

https://nodejs.org/en/

https://angular.io/cli

https://sourceforge.net/projects/wampserver/


4: Adicionar um schema no workbench com o nome smarkio_test. Voce pode criar um schema clicando neste icone conforme a imagem abaixo.

![image](https://user-images.githubusercontent.com/62350674/123459422-a690af80-d5bc-11eb-9d15-7c01b9a683ef.png)

![image](https://user-images.githubusercontent.com/62350674/123460003-65e56600-d5bd-11eb-88d8-42ec7ac8ed36.png)


5: Crie um arquivo .env dentro da pasta "smarkio_test_api" e coloque os seus dados como no exemplo abaixo:

![image](https://user-images.githubusercontent.com/62350674/123447096-de452a80-d5af-11eb-914d-0aee9a40a101.png)

6: Informe tambem estes dados dentro do arquivo "ormconfig.json" da pasta "smarkio_test_api".

7: Dentro do arquivo VoiceController.ts na pasta "smarkio_test_api" voce deve informar a sua própria "api-key", porem para ser mais pratico deixei a minha propria chave.

 	/********************* INFORM YOUR KEY and URL here ****************/
        const API_KEY = 'sua api-key'
        const API_URL = "seu url

# BackEnd

8: Abrir a pasta smarkio_test_api no terminal e rodar os seguintes comandos abaixo:
	
  	yarn
	
	/*** O COMANDO TYPEORM DEVE SER RODADO QUANDO O SCHEMA DO WORKBENCH JA ESTEJA CRIADO, DESSA FORMA
	ELE IRA ADICIONAR AS TABELAS NECESSARIAS ***/
	
	yarn typeorm migration:run
	yarn dev
	
	
	/*** CASO OCORRA ERRO DE CORS ****/
  	yarn add @types/cors --save-dev

![image](https://user-images.githubusercontent.com/62350674/123448071-e81b5d80-d5b0-11eb-86e4-f709621124b6.png)

 
# FrontEnd
 
9: Abrir a pasta smarkio_test_front no terminal e rodar os seguintes comandos:
	
	npm i
	ng s

![image](https://user-images.githubusercontent.com/62350674/123447984-d0dc7000-d5b0-11eb-9cfa-8ac56b5262db.png)


# RUN with docker

1: Instale o docker

2: Abra a pasta "smarkio_test_ibm" no terminal e rode o comando:
	
	docker-compose up --build

## BackEnd
3: Abrir a pasta smarkio_test_api no terminal e rodar os seguintes comandos abaixo:
	
  	yarn
	
	/*** O COMANDO TYPEORM DEVE SER RODADO QUANDO O SCHEMA DO WORKBENCH JA ESTEJA CRIADO, DESSA FORMA
	ELE IRA ADICIONAR AS TABELAS NECESSARIAS ***/
	
	yarn typeorm migration:run
	yarn dev

 
## FrontEnd
 
4: Abrir a pasta smarkio_test_front no terminal e rodar os seguintes comandos:
	
	npm i
	ng s


