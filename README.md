
# Delivery Rest API

A REST API for delivery records that includes fields like product
name , delivery place , delivery date. 


## Requirements
Basic Requirements include installing node and mongodb on your machine.
Basic Software Installation: Node, MongoDB , Docker 
Cloud Requirements: Google Cloud (Artifact repository, cloud build, cloud run enabled ) , Mongo Db Atlas M0 cluster  

**Dependencies**: mongoose, dotenv, express,mongodb 
**Dev Dependencies**: nodemon, jest

## Installation and Deployment

To get a local copy of the code, clone it using git:
```
git clone https://github.com/SIDD58/Delivery-Rest-Api.git
```
Install dependencies:
```
npm install
```
Now, you can start a local web server by running:
```
npm start
```
## Screenshots
 ### Get all records of deliveries
![get all](https://user-images.githubusercontent.com/42698210/183013889-2aa4cd4f-d5b4-49d4-bd66-a61a349968d2.JPG)
 ### Create a new delivery record
![post](https://user-images.githubusercontent.com/42698210/183013920-87e29ca1-0a30-4441-90ff-5c829b24e2aa.JPG)
 ### Get a record of delivery with particular id
![get 1](https://user-images.githubusercontent.com/42698210/183014194-4aa4ef99-02ec-4cec-8e5d-d95578a52a59.JPG)
 ### Update a delivery record with particular id
![update](https://user-images.githubusercontent.com/42698210/183014225-4e1457f2-b66e-42b7-a921-4d8d7cbe449e.JPG)
 ###  Delete a delivery record with particular id
![delete](https://user-images.githubusercontent.com/42698210/183014246-b6928f8d-91a6-478e-ba21-8ad6ad5e0d4c.JPG)

## API 

#### /deliveries
* `GET` : Get all records of deliveries 
* `POST` : Create a new delivery record 

#### /deliveries/id
* `GET` : Get a record of delivery with particular id
* `PATCH` : Update a delivery record with particular id
* `DELETE` : Delete a delivery record with particular id

### For more details on the cloud and CI/CD setup keep an eye on my upcoming blogs 

## Authors

- [@SIDD58](https://github.com/SIDD58)



