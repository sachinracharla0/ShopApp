# Shops List App
## Configuration
`PORT` & `DB_URL` can be configured in *`properties.ts`* file.
## API Endpoints
| Type | Method | Endpoint | 
| :- | :- | :- |
| **Create** | `POST` | `http://localhost:3000/api/shops` | 
| **Read** | `GET` | `http://localhost:3000/api/shops` | 
| **Update** | `PUT` | `http://localhost:3000/api/shops/:shopId` | 
| **Delete** | `DELETE` | `http://localhost:3000/api/shops/:shopId` | 
---
## Schemas
### `CREATE` & `UPDATE` **Request** Schema
```json
{
    "shopName": "String",
    "shopType": "String",
    "shopOwner": "String",
    "shopAddress": "String",
    "shopLocationLat": "Number",
    "shopLocationLng": "Number"
}
```
### `READ` **Response** Schema
```json
{
    "data": [
        {
            "shopAddress": {
                "location": {
                    "lat": "Number",
                    "lng": "Number"
                },
                "address": "String"
            },
            "_id": "ObjectId",
            "shopName": "String",
            "shopType": "String",
            "shopOwner": "String",
            "createdAt": "DateTime [YYYY-MM-dd:HH:MM:ss.sssZ]",
            "updatedAt": "DateTime [YYYY-MM-dd:HH:MM:ss.sssZ]"
        }        
    ],
    "message": "String",
    "status": "'SUCCESS' | 'ERROR'"
}
```
### `CREATE` & `UPDATE` **Response** Schema
```json
{
    "data": {
        "shopAddress": {
            "location": {
                "lat": "Number",
                "lng": "Number"
            },
            "address": "String"
        },
        "_id": "ObjectId",
        "shopName": "String",
        "shopType": "String",
        "shopOwner": "String",
        "createdAt": "DateTime [YYYY-MM-dd:HH:MM:ss.sssZ]",
        "updatedAt": "DateTime [YYYY-MM-dd:HH:MM:ss.sssZ]"
    },
    "message": "String",
    "status": "SUCCESS" | "ERROR"
}
```
### `DELETE` **Response** Schema
```json
{
    "message": "String",
    "status": "SUCCESS" | "ERROR"
}
```
> #### NOTE: `data` node will not be present in error senarios.
